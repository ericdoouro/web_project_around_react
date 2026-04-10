import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfile({ onSubmit, onClose }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const [errors, setError] = useState({
    name: "",
    about: "",
  });

  const [isValid, setIsValid] = useState(false);

  // 🔥 carregar dados quando abrir popup
  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  // 🔥 validação em tempo real
  useEffect(() => {
    const newError = {
      name: "",
      about: "",
    };

    if (name.trim().length < 2) {
      newError.name = "Preencha esse campo.";
    }

    if (about.trim().length < 2) {
      newError.about = "Por favor, insira um endereço web.";
    }

    setError(newError);

    // verifica se tudo está válido
    const formIsValid =
      !newError.name &&
      !newError.about &&
      name &&
      about;

    setIsValid(formIsValid);
  }, [name, about]);

   // onSubmit({ name, about });
//     updateUser({
//       ...currentUser,
//     "name": name,
//     "about": about,
// })

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) return;

    onSubmit({ name, about });
    onClose();
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      
     
      <input
        className={`popup__input ${
          errors.name ? "popup__input_type_error" : ""
        }`}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />

      {errors.name && (
        <p className="popup__error">{errors.name}</p>
      )}

       {/* {name === "eric" ? <p>Bonito Nome</p>:null} */}
      <input
        className={`popup__input ${
          errors.about ? "popup__input_type_error" : ""
        }`}
        type="text"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Profissão"
      />

      {errors.about && (
        <p className="popup__error">{errors.about}</p>
      )}

      <button
        className={`popup__save-button ${
          !isValid ? "popup__save-button_disabled" : ""
        }`}
        type="submit"
        disabled={!isValid}
      >
        Salvar
      </button>
    </form>
  );
}

export default EditProfile;