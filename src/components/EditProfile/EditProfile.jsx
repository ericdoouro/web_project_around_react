import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfile({ onSubmit, onClose }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      name: name || currentUser.name,
      about: about || currentUser.about,
    });

    onClose();
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <input
        className="popup__input"
        type="text"
        placeholder={currentUser.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="popup__input"
        type="text"
        placeholder={currentUser.about}
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />

      <button className="popup__save-button" type="submit">
        Salvar
      </button>
    </form>
  );
}

export default EditProfile;