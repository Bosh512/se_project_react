import "./SideBar.css";
import defaultavatar from "../../assets/defaultavatar.svg";

function SideBar({ currentUser, handleLogOut, handleEditClick }) {
  return (
    <div className="sidebar">
      {currentUser.isLoggedIn &&
        currentUser.userData &&
        currentUser.userData.name && (
          <div className="sidebar__user_container">
            {currentUser.userData.avatar && (
              <>
                <img
                  src={currentUser.userData.avatar}
                  alt={currentUser.userData.name}
                  className="sidebar__avatar"
                />
              </>
            )}
            {!currentUser.userData.avatar && (
              <>
                <div className="sidebar__avatar_display">
                  <p className="sidebar__avatar_display_text">
                    {" "}
                    {currentUser.userData.name[0]}
                  </p>
                </div>
              </>
            )}
            <p className="sidebar__username">{currentUser.userData.name}</p>
          </div>
        )}
      <div className="sidebar__button_container"></div>
      <button
        onClick={handleEditClick}
        className="sidebar__button_change"
        type="button"
      >
        Change Profile Data
      </button>
      <button
        onClick={handleLogOut}
        className="sidebar__button_logout"
        type="button"
      >
        Logout
      </button>
    </div>
  );
}

export default SideBar;
