import "./ModalWithForm.css";
import union from "../../assets/Union.svg";
import { Children } from "react";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  handleCloseModal,
  onSubmit,
}) {
  return (
    <div className={`form_modal ${isOpen ? "form_modal_opened" : ""}`}>
      <div className="form_modal__container">
        <h2 className="form_modal__title">{title}</h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="form_modal__close_button"
        >
          <img
            src={union}
            alt="Union.svg"
            className="form_modal__close_button_image"
          />
        </button>
        <form onSubmit={onSubmit} action="" className="form_modal__form">
          {children}
          <button type="submit" className="form_modal__submit_button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
