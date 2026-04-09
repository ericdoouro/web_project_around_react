import { useState } from "react";

import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function NewCard({ onSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, link });
  }

  const { currentUser } = useContext(CurrentUserContext);
  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <input
        className="popup__input"
        type="text"
        placeholder="Título"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="popup__input"
        type="url"
        placeholder="Link da imagem"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button 
        className="popup__save-button"
        type="submit">Criar</button>
    </form>
  );
}

export default NewCard;