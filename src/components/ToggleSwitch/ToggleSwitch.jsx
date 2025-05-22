import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch_checkbox"
      />
      <span className="toggle-switch_circle"></span>
      <span className="toggle-switch_text toggle-switch_text_f">F</span>
      <span className="toggle-switch_text toggle-switch_text_c">C</span>
    </label>
  );
}
