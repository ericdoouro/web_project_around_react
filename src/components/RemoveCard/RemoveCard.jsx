import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function RemoveCard({ onSubmit, }) {

  const { currentUser } = useContext(CurrentUserContext);
  return (
        <form 
          className="popup__form" 
          onSubmit={onSubmit}>

          <button 
            className="popup__save-button"
            type="submit">
              Sim
          </button>
        </form>
      );
    }

export default RemoveCard;