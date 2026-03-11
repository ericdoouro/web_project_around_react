import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Card({ card, onCardLike, onCardDelete, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);

  // garante que likes sempre seja array
  const likes = card.likes || [];

  const isLiked = likes.some((i) => i._id === currentUser?._id);
  const isOwn = card.owner?._id === currentUser?._id;

  const cardLikeButtonClassName = `element__like-img ${
    isLiked ? "element__button_active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleCardClick() {
    onCardClick(card);
  }

  return (
      <li className="elements">
        <div className="element__item">

            <button className="element__delete-button">
                <img 
                  className="element__delete-button-img" 
                  src="./images/delete.svg" 
                  alt="Delete" />
            </button>
          
            <img
              src={card.link}
              alt={card.name}
              className="element__item-img"
              onClick={handleCardClick}
            />
          
        <div className="element__item-info">
            <h2 className="element__item-info-text">{card.name}</h2>
              <button className="element__button"
                onClick={handleLikeClick}
              >
                  <img 
                    className="element__like-img" 
                    src="./images/like.svg" 
                    alt="Like" />
              </button>

        </div>
      </div>
    </li>
  );
}

export default Card;