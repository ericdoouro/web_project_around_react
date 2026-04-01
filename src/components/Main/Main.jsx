import { useState } from "react";

import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import ImagePopup from "../ImagePopup/ImagePopup";

// ✅ MOCK
const initialCards = [
  {
    _id: "1",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    isLiked: false,
  },
  {
    _id: "2",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    isLiked: false,
  },
];

function Main() {
  // STATES
  const [cards, setCards] = useState(initialCards);
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({
    name: "Jacques Cousteau",
    about: "Explorer",
    avatar: "/images/avatar.jpg",
  });

  // ===== HANDLERS =====

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardDelete(card) {
    const updatedCards = cards.filter((c) => c._id !== card._id);
    setCards(updatedCards);
  }

  function handleCardLike(card) {
    const updatedCards = cards.map((c) => {
      if (c._id === card._id) {
        return {
          ...c,
          isLiked: !c.isLiked,
        };
      }
      return c;
    });

    setCards(updatedCards);
  }

  function handleUpdateProfile({ name, about }) {
    setCurrentUser((prev) => ({
      ...prev,
      name,
      about,
    }));
    handleClosePopup();
  }

  function handleUpdateAvatar({ avatar }) {
    setCurrentUser((prev) => ({
      ...prev,
      avatar,
    }));
    handleClosePopup();
  }

  function handleAddCard({ name, link }) {
    const newCard = {
      _id: Date.now().toString(),
      name,
      link,
      isLiked: false,
    };

    setCards([newCard, ...cards]);
    handleClosePopup();
  }

  // ===== POPUPS =====

  const editProfilePopup = {
    title: "Editar Perfil",
    children: (
      <EditProfile
        onSubmit={handleUpdateProfile}
        currentUser={currentUser}
      />
    ),
  };

  const editAvatarPopup = {
    title: "Editar Avatar",
    children: <EditAvatar onSubmit={handleUpdateAvatar} />,
  };

  const addCardPopup = {
    title: "Novo Card",
    children: <NewCard onSubmit={handleAddCard} />,
  };

  return (
    <main className="content">
      
      {/* PROFILE */}
      <section className="profile">
        <div className="profile__avatar-container">
          <button
            className="profile__avatar-edit"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img src="/images/edit.png" alt="Edit" />
          </button>

          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Perfil"
          />
        </div>

        <div className="profile__info">
          <div className="profile__info-text">
            <h2 className="profile__info-name">{currentUser.name}</h2>
            <button
              className="popup__edit-profile-button"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img src="/images/edit.png" alt="Edit" />
            </button>
          </div>

          <p className="profile__info-profession">{currentUser.about}</p>
        </div>

        <button
          className="profile__add"
          onClick={() => handleOpenPopup(addCardPopup)}
        >
          <img src="/images/add.png" alt="Add" />
        </button>
      </section>

      {/* CARDS */}
      <section className="elements__container">
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>

      {/* POPUP PADRÃO */}
      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}

      {/* POPUP DE IMAGEM */}
      {selectedCard && (
        <ImagePopup
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </main>
  );
}

export default Main;