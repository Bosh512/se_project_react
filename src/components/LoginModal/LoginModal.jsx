import "./LoginModal.css";
import { useState, useEffect } from "react";
import union from "../../assets/Union.svg";

function LoginModal({ onLogIn, isOpen, handleCloseModal, onSignUpClick }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUpRedirect = () => {
    handleCloseModal();
    onSignUpClick();
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    onLogIn(data);
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div className={`form_modal ${isOpen ? "form_modal_opened" : ""}`}>
      <div className="login_form_modal__container">
        <h2 className="form_modal__title">Log In</h2>
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
          onSubmit={handleLogInSubmit}
          action=""
          className="login_form_modal__form"
        >
          <label htmlFor="emailTextLogIn" className="form_modal__label">
            Email{" "}
            <input
              type="email"
              className="form_modal__input"
              id="emailTextLogIn"
              name="email"
              value={data.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </label>
          <div className="login_form_modal__password_input_container">
            <label
              htmlFor="passwordTextLogIn"
              className="login_form_modal__label"
            >
              Password{" "}
              <input
                type="password"
                className="form_modal__input"
                id="passwordTextLogIn"
                name="password"
                value={data.password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="login_form_modal__button_container">
            <button type="submit" className="login_form_modal__submit_button">
              Log In
            </button>
            <button
              type="button"
              onClick={handleSignUpRedirect}
              className="login_form_modal__redirect_button"
            >
              or Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
