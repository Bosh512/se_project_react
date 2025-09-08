import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import defaultavatar from "../../assets/defaultavatar.svg";

function Profile({
  handleAddButtonClick,
  onCardClick,
  weatherData,
  clothingItems,
  currentUser,
  handleLogOut,
  onEditClick,
  onCardLike,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          currentUser={currentUser}
          handleLogOut={handleLogOut}
          handleEditClick={onEditClick}
        />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          onCardClick={onCardClick}
          weatherData={weatherData}
          clothingItems={clothingItems}
          handleAddButtonClick={handleAddButtonClick}
          onCardLike={onCardLike}
          currentUser={currentUser}
        />
      </section>
    </div>
  );
}

export default Profile;
