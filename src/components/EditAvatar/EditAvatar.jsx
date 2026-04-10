import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditAvatar({ onSubmit, onClose }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  // 🔥 carrega avatar atual ao abrir
  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  // 🔥 validação
  useEffect(() => {
    if (!avatar) {
      setError();
      setIsValid(false);
      return;
    }

    try {
      new URL(avatar); 
        setError("");
        setIsValid(true);
    
    } catch {
        setError("Digite uma URL válida");
        setIsValid(false);
    }
  }, [avatar]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) return;

    onSubmit({ avatar });
    onClose();
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      
      <input
        className={`popup__input ${
          error ? "popup__input_type_error" : ""
        }`}
        type="url"
        placeholder="Link do avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />

      {error && <p className="popup__error">{error}</p>}

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

export default EditAvatar;