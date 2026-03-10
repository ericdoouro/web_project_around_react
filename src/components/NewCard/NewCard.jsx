import { useState } from "react";

function NewCard({ onAddCard }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [nameError, setNameError] = useState("");
  const [linkError, setLinkError] = useState("");

  const isFormValid = name && link && !nameError && !linkError;

  function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) return;
      onAddCard({ name, link });
      setName("");
      setLink("");
  }

  return (
    <>
      <input
        type="text"
        className={`popup__input ${nameError && "popup__input_type_error"}`}
        placeholder="Título"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setNameError(e.target.value.length < 2 ? "Mínimo 2 caracteres" : "");
        }}
      />
      <span className="popup__error">{nameError}</span>

      <input
        type="url"
        className={`popup__input ${linkError && "popup__input_type_error"}`}
        placeholder="Link da imagem"
        value={link}
        onChange={(e) => {
          setLink(e.target.value);
          setLinkError(!e.target.validity.valid ? "Link inválido" : "");
        }}
      />
      <span className="popup__error">{linkError}</span>

      <button
        type="submit"
        className={`popup__save-button ${!isFormValid && "popup__save-button_disabled"}`}
        disabled={!isFormValid}
        onClick={handleSubmit}
      >
        Salvar
      </button>
    </>
  );
}

export default NewCard;