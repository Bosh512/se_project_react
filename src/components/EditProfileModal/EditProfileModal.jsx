import "./EditProfileModal.css";
import { useState, useEffect } from "react";
import union from "../../assets/Union.svg";

function EditProfileModal({
  isOpen,
  handleCloseModal,
  currentUser,
  onEdit,
  setCurrentUser,
}) {
  const [data, setData] = useState({
    name: currentUser.userData?.name || "",
    avatar: currentUser.userData?.avatar || "",
  });

  useEffect(() => {
    if (currentUser) {
      setData({
        name: currentUser.userData?.name || "",
        avatar: currentUser.userData?.avatar || "",
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(data);
  };

  return (
    <div className={`edit_form_modal ${isOpen ? "form_modal_opened" : ""}`}>
      <div className="edit_form_modal__container">
        <h2 className="form_modal__title">Change Profile Data</h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="form_modal__close_button"
        >
          <img
            src={union}
            alt="Union.svg"
            className="form_modal__close_button_image"
          />
        </button>
        <form
          onSubmit={handleEditSubmit}
          action=""
          className="edit_form_modal__form"
        >
          <div className="edit_form_modal__input_container">
            <label htmlFor="nameTextEdit" className="edit_form_modal__label">
              Name *{" "}
              <input
                type="text"
                className="form_modal__input"
                id="nameTextEdit"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="edit_form_modal__input_container">
            <label htmlFor="avatarUrlEdit" className="edit_form_modal__label">
              Avatar URL *{" "}
              <input
                type="url"
                className="form_modal__input"
                id="avatarUrlEdit"
                placeholder="Avatar URL"
                name="avatar"
                value={data.avatar}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="edit_form_modal__button_container">
            <button type="submit" className="edit_form_modal__submit_button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
