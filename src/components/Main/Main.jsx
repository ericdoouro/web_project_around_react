import { useContext, useState } from "react";

import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import ImagePopup from "../ImagePopup/ImagePopup";
import RemoveCard from "../RemoveCard/RemoveCard";

import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main({ 
  cards,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
}) {

  // STATES
  const { currentUser } = useContext(CurrentUserContext);
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

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

  // ===== POPUPS =====

  const editAvatarPopup = {
    title: "Editar Avatar",
    children: (
      <EditAvatar
        onClose={handleClosePopup}
      />
    ),
  };

  const editProfilePopup = { 
    title: "Edita Perfil",
    children: (
      <EditProfile 
        onClose={handleClosePopup} 
      />
    ),
  };

  const addCardPopup = {
    title: "Novo Card",
    children: (
      <NewCard
        onSubmit={onAddPlaceSubmit}
        onClose={handleClosePopup}
      />
    )
  }

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
            src={currentUser.avatar || null}
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
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>

      {/* POPUP PADRÃO */}
      {popup && (
        <Popup 
          title={popup.title} 
          onClose={handleClosePopup}>
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