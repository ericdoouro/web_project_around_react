import { useState } from "react";

function EditAvatar({ onSubmit }) {
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ avatar });
    setAvatar("");
  }

  return (
    <>
      <input
        type="url"
        className="popup__input"
        placeholder="Link do avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />

      <button className="popup__save-button" onClick={handleSubmit}>
        Salvar
      </button>
    </>
  );
}

export default EditAvatar;