import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const { currentUser } = useContext(CurrentUserContext);

function PopupWithForm({ title, children, onClose, isOpen }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={onClose}></button>
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form">{children}</form>
      </div>
    </div>
  );
}

export default PopupWithForm;