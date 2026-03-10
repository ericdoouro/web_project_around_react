function ImagePopup({ card, isOpen, onClose }) {
  if (!card) return null;

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container-image">
        <button className="popup__close-button" onClick={onClose}></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__image-text">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;