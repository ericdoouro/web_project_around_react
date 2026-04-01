function RemoveCard({ isOpen, onClose, onSubmit, card }) {
  

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(card);
  }

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={onClose}></button>

        <h2 className="popup__title">Tem certeza?</h2>

        <form className="popup__form" onSubmit={handleSubmit}>
          <button type="submit" className="popup__save-button">
            Sim
          </button>
        </form>
      </div>
    </div>
  );
}

export default RemoveCard;