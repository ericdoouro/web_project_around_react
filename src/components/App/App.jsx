import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import api from "../../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await api.getUserInfo();
        setCurrentUser(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, []);

  const handleUpdateUser = (data) => {
  return api
    .setUserInfo(data)
    .then((newData) => {
      setCurrentUser(newData);
      return newData;
    });
  };

  const handleUpdateAvatar = (data) => {

  return api
    .updateAvatar(data.avatar)
    .then((newData) => {
      setCurrentUser(newData);
      return newData;
    })
  };

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch(console.error);
  }, []);

    async function handleCardLike(card) {
    const isLiked = card.isLiked;

    try {
      const newCard = await api.changeLikeCardStatus(
        card._id,
        !isLiked
      );

      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id
            ? newCard
            : currentCard
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

    async function handleAddPlaceSubmit({ name, link }) {
      const newCard = await api.addNewCard({ name, link });

      setCards((state) => [newCard, ...state]);

      return newCard;
    }
    
    function handleCardDelete(card) {
      setCardToDelete(card);
    }

    async function handleConfirmDelete() {
      try {
        await api.deleteCard(cardToDelete._id);

        setCards((state) =>
          state.filter(
            (currentCard) => currentCard._id !== cardToDelete._id
          )
        );

        setCardToDelete(null);
      } catch (error) {
        console.error(error);
      }
    }

    function handleOpenPopup(popupData) {
      setPopup(popupData);
    }

    function handleClosePopup() {
      setPopup(null);
    }
  
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
      }}
    >
      <div className='page__content'>
        <Header />
          <Main
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onAddPlaceSubmit={handleAddPlaceSubmit}
            popup={popup}
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            cardToDelete={cardToDelete}
            onConfirmDelete={handleConfirmDelete}
          />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;