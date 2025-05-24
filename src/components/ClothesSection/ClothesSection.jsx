import "./ClothesSection.css";

import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function ClothesSection({
  handleAddButtonClick,
  onCardClick,
  weatherData,
  clothingItems,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__container">
        <p className="clothes-section__text">Your Items</p>
        <button
          className="clothes-section__button"
          type="button"
          onClick={handleAddButtonClick}
        >
          + Add New
        </button>
      </div>
      <div>
        <ul className="clothes-section__items">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={onCardClick} //handleCardClick
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ClothesSection;
