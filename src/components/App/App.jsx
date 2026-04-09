import { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Jacques Cousteau",
    about: "Explorer",
    avatar: "/images/image_perfil.jpg",
  });
  
  function updateUser(data) {
    setCurrentUser((prevUser) => ({
    ...prevUser,
    ...data,
    }));
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, updateUser }}>
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
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    isLiked: false,
  },
  {
    _id: "2",
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    isLiked: false,
    },
    {
    _id: "3",
      name: "Montanhas Carecas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
      isLiked: false,
    },
    {
    _id: "4",
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
      isLiked: false,
    },
    {
    _id: "5",
      name: "Parque Nacional da Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
      isLiked: false,
    },
    {
    _id: "6",
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
      isLiked: false,
    },
];

export default App;