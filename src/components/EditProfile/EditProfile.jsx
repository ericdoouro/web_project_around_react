import { useState } from "react";

function EditProfile({ onSubmit, currentUser }) {
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, about });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <input
        className="popup__input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <input
        className="popup__input"
        type="text"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Profissão"
      />

      <button 
        className="popup__save-button"
        type="submit">Salvar
      </button>
    </form>
  );
}

export default EditProfile;