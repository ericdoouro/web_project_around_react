function ImagePopup({ card, onClose }) {
  if (!card) return true;

  return (
    <div className="popup popup_opened">
      <div className="popup__content popup__content_content_image">
        <button className="popup__close-button" onClick={onClose}></button>

        <img src={card.link} alt={card.name} className="popup__image" />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;