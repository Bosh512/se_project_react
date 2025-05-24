import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import defaultavatar from "../../assets/defaultavatar.svg";

function Profile({
  handleAddButtonClick,
  onCardClick,
  weatherData,
  clothingItems,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          onCardClick={onCardClick}
          weatherData={weatherData}
          clothingItems={clothingItems}
          handleAddButtonClick={handleAddButtonClick}
        />
      </section>
    </div>
  );
}

export default Profile;
