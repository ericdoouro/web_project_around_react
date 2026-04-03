function RemoveCard({ onSubmit, }) {

  return (
        <form 
          className="popup__form" 
          onSubmit={onSubmit}>

          <button 
            type="submit" 
            className="popup__save-button">
              Sim
          </button>
        </form>
      );
    }

export default RemoveCard;