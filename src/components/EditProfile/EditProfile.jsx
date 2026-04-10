import { useState } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfile({ onSubmit, }) {
  const { currentUser, updateUser } = useContext(CurrentUserContext);
  
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about);
  function handleSubmit(e) {
    console.log("Salvar", currentUser)
    console.log(name )
    console.log(about )
    e.preventDefault();
    // onSubmit({ name, about });
//     updateUser({
//       ...currentUser,
//     "name": name,
//     "about": about,
// })

    onSubmit({...currentUser, name, about });
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