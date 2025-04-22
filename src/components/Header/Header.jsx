import "./Header.css";
import wtwr from "../../assets/wtwr.svg";
import defaultavatar from "../../assets/defaultavatar.svg";

function Header({ handleAddButtonClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={wtwr} alt="logo" className="header__logo"></img>
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddButtonClick}
        type="button"
        className="header__button"
      >
        + Add Clothes
      </button>
      <div className="header__user_container">
        <p className="header__username">Terence Tegegne</p>
        <img
          src={defaultavatar}
          alt="!MAKE USERNAME LATER!"
          className="header__avatar"
        />
      </div>
    </header>
  );
}

export default Header;
