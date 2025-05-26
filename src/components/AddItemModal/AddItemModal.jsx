import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useState, useEffect } from "react";

function AddItemModal({ isOpen, handleCloseModal, onAddItemModalSubmit }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  // const { values, handleChange, setValues } = useForm({});
  // I made at attempt at implementing a hook for input handling and could not figure it out.
  // For the sake of time restraints I opted to continue with the code that works and is only a suggestion to alter.

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleWeatherChange = (event) => {
    setWeather(event.target.value);
  };

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather("");
  }, [isOpen]); // watch the opening state

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="nameText" className="form_modal__label">
        Name{" "}
        <input
          type="text"
          className="form_modal__input"
          id="nameText"
          placeholder="Name"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="form_modal__label">
        Image{" "}
        <input
          type="url"
          className="form_modal__input"
          id="imageUrl"
          placeholder="Image URL"
          required
          onChange={handleUrlChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="form_modal__radio-buttons">
        <legend className="form_modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="form_modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="form_modal__input_type_radio"
            name="radioButtonInput"
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="form_modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="form_modal__input_type_radio"
            name="radioButtonInput"
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="form_modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="form_modal__input_type_radio"
            name="radioButtonInput"
            value="cold"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
