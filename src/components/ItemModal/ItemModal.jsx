import "./ItemModal.css";
import unionwhite from "../../assets/Unionwhite.svg";

function ItemModal({ activeModal, handleCloseModal, card, onCardDelete }) {
  return (
    <div
      className={` item_modal ${
        activeModal === "preview" && "item_modal_opened"
      } `}
    >
      <div className="item_modal__container">
        <button
          onClick={handleCloseModal}
          type="button"
          className="item_modal__close_button"
        >
          <img
            src={unionwhite}
            alt="Unionwhite.svg"
            className="item_modal__close_button_image"
          />
        </button>
        <img
          src={card.imageUrl}
          alt="card image"
          className="item_modal__image"
        />
        <div className="item_modal__caption_container">
          <div className="item_modal__caption_sub_container">
            <h2 className="item_modal__caption">{card.name}</h2>
            <p className="item_modal__weather">Weather: {card?.weather}</p>
          </div>
          <button
            className="item_modal__delete_button"
            onClick={() => onCardDelete(card._id)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
