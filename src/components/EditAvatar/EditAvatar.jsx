import { useState } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditAvatar({ onSubmit }) {
  const [avatar, setAvatar] = useState("");

const { updateUser, currentUser } = useContext(CurrentUserContext);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Função")
    updateUser({
      ...currentUser,
    avatar: avatar
})
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