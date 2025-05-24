import "./SideBar.css";
import defaultavatar from "../../assets/defaultavatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__user_container">
        <img
          src={defaultavatar}
          alt="!MAKE USERNAME LATER!"
          className="sidebar__avatar"
        />
        <p className="sidebar__username">Terence Tegegne</p>
      </div>
    </div>
  );
}

export default SideBar;
