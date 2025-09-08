import "./RegisterModal.css";
import { useState } from "react";
import union from "../../assets/Union.svg";
import { registration } from "../../utils/auth";

function RegisterModal({
  onRegistration,
  isOpen,
  handleCloseModal,
  onLogInClick,
}) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleLogInRedirect = () => {
    handleCloseModal();
    onLogInClick();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    onRegistration(data);
  };

  return (
    <div className={`form_modal ${isOpen ? "form_modal_opened" : ""}`}>
      <div className="register_form_modal__container">
        <h2 className="form_modal__title">Sign Up</h2>
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
        <form
          onSubmit={handleRegistrationSubmit}
          action=""
          className="register_form_modal__form"
        >
          <label htmlFor="emailTextReg" className="form_modal__label">
            Email *{" "}
            <input
              type="email"
              className="form_modal__input"
              id="emailTextReg"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </label>
          <div className="register_form_modal__input_container">
            <label
              htmlFor="passwordTextReg"
              className="register_form_modal__label"
            >
              Password *{" "}
              <input
                type="password"
                className="form_modal__input"
                id="passwordTextReg"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="register_form_modal__input_container">
            <label htmlFor="nameTextReg" className="register_form_modal__label">
              Name *{" "}
              <input
                type="text"
                className="form_modal__input"
                id="nameTextReg"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="register_form_modal__input_container">
            <label
              htmlFor="avatarUrlReg"
              className="register_form_modal__label"
            >
              Avatar URL{" "}
              <input
                type="url"
                className="form_modal__input"
                id="avatarUrlReg"
                placeholder="Avatar URL"
                name="avatar"
                value={data.avatar}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="register_form_modal__button_container">
            <button
              type="submit"
              className="register_form_modal__submit_button"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={handleLogInRedirect}
              className="register_form_modal__redirect_button"
            >
              or Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
