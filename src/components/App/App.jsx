import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import api from "../../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
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

  api
    .updateAvatar(data.avatar)
    .then((newData) => {
      setCurrentUser(newData);
    })
    .catch(console.error);
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

    async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);

      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== card._id)
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
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;