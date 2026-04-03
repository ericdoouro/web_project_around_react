import { useState } from "react";

function EditAvatar({ onSubmit }) {
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ avatar });
  }

  return (
    <form 
      className="form__fields"
      onSubmit={handleSubmit}>

        <input
          className="form__fields-input"
          type="url"
          placeholder="Link do avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <button 
          className="form__submit" 
          type="submit">Salvar
        </button>
    </form>
  );
}

export default EditAvatar;