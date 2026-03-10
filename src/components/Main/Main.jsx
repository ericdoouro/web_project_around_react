import { useEffect, useState } from "react";
import api from "../../utils/api.js";

import Card from "../Card/Card";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import ImagePopup from "../ImagePopup/ImagePopup";

function Main() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // carregar dados iniciais
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch(console.error);
  }, []);

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddCardOpen(false);
    setIsEditAvatarOpen(false);
    setSelectedCard(null);
  }

  // ===== Handlers =====

  function handleAddCard(cardData) {
    api.addNewCard(cardData)
      .then((newCard) => {
        setCards((prev) => [newCard, ...prev]);
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleUpdateProfile(data) {
    api.editUserInfo({ name: data.name, about: data.job })
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(console.error);
  }

  function handleUpdateAvatar(data) {
    api.updateAvatar(data.avatar)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch(console.error);
  }

function handleCardLike(card) {
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const request = isLiked
    ? api.unlikeCard(card._id)
    : api.likeCard(card._id);

  request
    .then((newCard) => {
      setCards((state) =>
        state.map((c) => (c._id === card._id ? newCard : c))
      );
    })
    .catch(console.error);
}

function handleCardDelete(card) {
  api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
    .catch(console.error);
}

  return (
    <main className="content">

      {/* PROFILE */}
      <section className="profile">
        <div className="profile__avatar-container">
          <button className="profile__avatar-edit" onClick={() => setIsEditAvatarOpen(true)}>
            <img src="/images/edit.png" alt="Edit" />
          </button>

          <img className="profile__avatar" src={currentUser.avatar} alt="Perfil" />
        </div>

        <div className="profile__info">
          <div className="profile__info-text">
            <h2 className="profile__info-name">{currentUser.name}</h2>
            <button className="popup__edit-profile-button" onClick={() => setIsEditProfileOpen(true)}>
              <img src="/images/edit.png" alt="Edit" />
            </button>
          </div>
          <p className="profile__info-profession">{currentUser.about}</p>
        </div>

        <button className="profile__add" onClick={() => setIsAddCardOpen(true)}>
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
              onCardClick={setSelectedCard}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>

      {/* POPUPS */}
      <PopupWithForm title="Editar Perfil" isOpen={isEditProfileOpen} onClose={closeAllPopups}>
        <EditProfile onSubmit={handleUpdateProfile} />
      </PopupWithForm>

      <PopupWithForm title="Novo Card" isOpen={isAddCardOpen} onClose={closeAllPopups}>
        <NewCard onAddCard={handleAddCard} />
      </PopupWithForm>

      <PopupWithForm title="Editar Avatar" isOpen={isEditAvatarOpen} onClose={closeAllPopups}>
        <EditAvatar onSubmit={handleUpdateAvatar} />
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={!!selectedCard} onClose={closeAllPopups} />
    </main>
  );
}

export default Main;