function Popup({ title, children, onClose }) {
  if (!Popup) return true;
  
  return (
    <div className="popup popup_opened">
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button
          className="popup__close-button"
          onClick={onClose}
        ></button>

        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}

export default Popup;