import { useContext, useState, useEffect } from "react";

import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import ImagePopup from "../ImagePopup/ImagePopup";
import RemoveCard from "../RemoveCard/RemoveCard";
import api from "../../utils/api";

import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main() {
  // STATES
  const { currentUser } = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToDelete, setCardToDelete] = useState(null);
  

    useEffect(() => {
        api
            .getInitialCards()
            .then((Cards) => {
                setCards(Cards);
            })

            .catch((err) => {
                console.error(err);
            });
    }, []);
  

  // const [currentUser, setCurrentUser] = useState({
  //   name: "Eric do Ouro",
  //   about: "Explorer",
  //   avatar: "./images/image_perfil.jpg",
  // });

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
    setCardToDelete(card);
}

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    
    await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {

        setCards((state) => state.map((currentCard) => currentCard._id === card._id 
          ? newCard 
          : currentCard));

    }).catch((error) => console.error(error));
  }

  function handleUpdateAvatar({ avatar }) {
    };

  function handleAddCard({ name, link }) {
    api
      .addNewCard({ name, link })
      .then((newCard) => {
        setCards((state) => [newCard, ...state]);
        handleClosePopup();
      })
      .catch(console.error);
  }

  function handleConfirmDelete() {
    const updatedCards = cards.filter(
      (c) => c._id !== cardToDelete._id
    );

    setCards(updatedCards);
    setCardToDelete(null);
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
    children: 
      <NewCard 
        onSubmit={handleAddCard}
        onClose={handleClosePopup} />,
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
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}

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

      {cardToDelete && (
        <Popup 
          title="Tem certeza?" onClose={() => setCardToDelete(null)}>
        
          <RemoveCard
            onSubmit={(evt)=> {
              evt.preventDefault()
              handleConfirmDelete()
            }}
          /> 
        </Popup>
      )}
    </main>
  );
}

export default Main;