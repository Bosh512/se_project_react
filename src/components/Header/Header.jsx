import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import wtwr from "../../assets/wtwr.svg";
import defaultavatar from "../../assets/defaultavatar.svg";
import { Link } from "react-router-dom";

function Header({ handleAddButtonClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/se_project_react/">
        <img src={wtwr} alt="logo" className="header__logo"></img>
      </Link>
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        onClick={handleAddButtonClick}
        type="button"
        className="header__button"
      >
        + Add Clothes
      </button>
      <Link to="/se_project_react/profile" className="header__link">
        <div className="header__user_container">
          <p className="header__username">Terence Tegegne</p>
          <img
            src={defaultavatar}
            alt="!MAKE USERNAME LATER!"
            className="header__avatar"
          />
        </div>
      </Link>
    </header>
  );
}

export default Header;
