import { useEffect, useState } from "react";

import "./App.css";
import { coordinates, APIkey } from "../utils/constants";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import { getWeatherData, filterWeatherData } from "../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleAddButtonClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeatherData(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          handleAddButtonClick={handleAddButtonClick}
          weatherData={weatherData}
        />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        handleCloseModal={closeActiveModal}
      >
        <label htmlFor="nameText" className="form_modal__label">
          Name{" "}
          <input
            type="text"
            className="form_modal__input"
            id="nameText"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageUrl" className="form_modal__label">
          Image{" "}
          <input
            type="url"
            className="form_modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="form_modal__radio-buttons">
          <legend className="form_modal__legend">
            Select the weather type:
          </legend>
          <label htmlFor="hot" className="form_modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              className="form_modal__input_type_radio"
            />{" "}
            Hot
          </label>
          <label htmlFor="warm" className="form_modal__label_type_radio">
            <input
              id="warm"
              type="radio"
              className="form_modal__input_type_radio"
            />{" "}
            Warm
          </label>
          <label htmlFor="cold" className="form_modal__label_type_radio">
            <input
              id="cold"
              type="radio"
              className="form_modal__input_type_radio"
            />{" "}
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        handleCloseModal={closeActiveModal}
      />
    </div>
  );
}

export default App;
