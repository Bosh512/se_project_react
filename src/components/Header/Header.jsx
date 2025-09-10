import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import wtwr from "../../assets/wtwr.svg";
import defaultavatar from "../../assets/defaultavatar.svg";
import { Link } from "react-router-dom";

function Header({
  handleLoginClick,
  handleSignUpClick,
  handleAddButtonClick,
  weatherData,
  currentUser,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img src={wtwr} alt="logo" className="header__logo"></img>
      </Link>
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {currentUser.isLoggedIn && (
        <button
          onClick={handleAddButtonClick}
          type="button"
          className="header__button"
        >
          + Add Clothes
        </button>
      )}
      {!currentUser.isLoggedIn && (
        <>
          <button
            onClick={handleSignUpClick}
            type="button"
            className="header__button"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginClick}
            type="button"
            className="header__button"
          >
            Log In
          </button>
        </>
      )}
      {currentUser.isLoggedIn &&
        currentUser.userData &&
        currentUser.userData.name && (
          <Link to="/profile" className="header__link">
            <div className="header__user_container">
              <p className="header__username">{currentUser.userData.name}</p>
              {currentUser.userData.avatar && (
                <>
                  <img
                    src={currentUser.userData.avatar}
                    alt={currentUser.userData.name}
                    className="header__avatar"
                  />
                </>
              )}
              {!currentUser.userData.avatar && (
                <>
                  <div className="header__avatar_display">
                    <p className="header__avatar_display_text">
                      {" "}
                      {currentUser.userData.name[0]}
                    </p>
                  </div>
                </>
              )}
            </div>
          </Link>
        )}
    </header>
  );
}

export default Header;
