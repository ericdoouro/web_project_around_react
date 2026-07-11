import { useRef, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditAvatar({ onClose }) {
  const { currentUser, handleUpdateAvatar, } = useContext(CurrentUserContext);

  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });

    onClose();
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      
      <input
        className="popup__input"
        type="url"
        placeholder="Link do avatar"
        ref={avatarRef}
      />

      <button
        className="popup__save-button"
        type="submit"
      >
        Salvar
      </button>
    </form>
  );
}

export default EditAvatar;