import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import api from "../../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Nome",
    about: "Profissão",
    avatar: "/images/image_perfil.jpg",
  });
  
  // function updateUser(data) {
    // console.log(data)
    // setCurrentUser(data) 
  // }

  useEffect(() => {
    api.getUserInfo()
     .then((user) => {
        setCurrentUser(user);
     })
     .catch((err) => {
      console.error(err);
     });
  }, []);

  return (
    <CurrentUserContext.Provider 
      value={currentUser}>
        <div className="page">
          <Header />
          <Main />
          <Footer />
        </div>
    </CurrentUserContext.Provider>
  );
}

// ✅ MOCK
const initialCards = [
  {
    _id: "1",
    name: "Vale de Yosemite",
    links: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    isLiked: false,
  },
  {
    _id: "2",
    name: "Lago Louise",
    links: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    isLiked: false,
    },
    {
    _id: "3",
      name: "Montanhas Carecas",
      links: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
      isLiked: false,
    },
    {
    _id: "4",
      name: "Latemar",
      links: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
      isLiked: false,
    },
    {
    _id: "5",
      name: "Parque Nacional da Vanoise",
      links: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
      isLiked: false,
    },
    {
    _id: "6",
      name: "Lago di Braies",
      links: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
      isLiked: false,
    },
];

export default App;