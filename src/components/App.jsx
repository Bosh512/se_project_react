import { useEffect, useState } from "react";
import { coordinates, APIkey } from "../utils/constants";
// import { defaultClothingItems } from "../utils/constants";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { getWeatherData, filterWeatherData } from "../utils/weatherApi";
import {
  getItems,
  addItems,
  deleteItems,
  addCardLike,
  removeCardLike,
} from "../utils/api";
import {
  registration,
  authorization,
  getUserInfo,
  updateUserInfo,
  ProtectedRoute,
} from "../utils/auth.jsx";
import { setToken, getToken } from "../utils/token";
import "./App.css";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";
import ItemModal from "./ItemModal/ItemModal";
import AddItemModal from "./AddItemModal/AddItemModal";
import Profile from "./Profile/Profile";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";
import EditProfileModal from "./EditProfileModal/EditProfileModal";

import CurrentUserContext from "../contexts/CurrentUser";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: false,
    userData: null,
  });

  const navigate = useNavigate();

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddButtonClick = () => {
    setActiveModal("add-garment");
  };

  const handleLoginClick = () => {
    setActiveModal("log-in");
  };

  const handleEditClick = () => {
    setActiveModal("edit");
  };

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    addItems(name, imageUrl, weather)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleCardDelete = async (_id) => {
    try {
      await deleteItems(_id);
      setClothingItems((items) => items.filter((item) => item._id !== _id));
      closeActiveModal();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeatherData(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  const handleRegistration = (data) => {
    registration(data)
      .then((newUser) => {
        setCurrentUser({
          isLoggedIn: true,
          userData: newUser,
        });
        navigate("/profile");
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    getUserInfo(jwt)
      .then((data) => {
        setCurrentUser({
          isLoggedIn: true,
          userData: data,
        });
      })
      .catch(console.error);
  }, []);

  const handleEdit = (data) => {
    const jwt = getToken();

    updateUserInfo(data, jwt)
      .then((updatedUser) => {
        setCurrentUser((prev) => ({
          ...prev,
          userData: updatedUser,
        }));
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLogIn = (data) => {
    authorization(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          getUserInfo(res.token).then((userData) => {
            setCurrentUser({
              isLoggedIn: true,
              userData,
            });
            navigate("/profile");
            closeActiveModal();
          });
        }
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser({
      isLoggedIn: false,
      userData: null,
    });
    navigate("/");
    closeActiveModal();
  };

  const handleCardLike = ({ _id, isLiked }) => {
    const jwt = getToken();
    !isLiked
      ? addCardLike(_id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(_id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__content">
            <Header
              handleAddButtonClick={handleAddButtonClick}
              handleLoginClick={handleLoginClick}
              handleSignUpClick={handleSignUpClick}
              weatherData={weatherData}
              currentUser={currentUser}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute currentUser={currentUser}>
                    <Profile
                      weatherData={weatherData}
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddButtonClick={handleAddButtonClick}
                      currentUser={currentUser}
                      handleLogOut={handleLogOut}
                      onEditClick={handleEditClick}
                      onCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            handleCloseModal={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            handleCloseModal={closeActiveModal}
            onCardDelete={handleCardDelete}
            currentUser={currentUser}
          />
          <LoginModal
            isOpen={activeModal === "log-in"}
            onSignUpClick={handleSignUpClick}
            handleCloseModal={closeActiveModal}
            onLogIn={handleLogIn}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            onLogInClick={handleLoginClick}
            handleCloseModal={closeActiveModal}
            onRegistration={handleRegistration}
          />
          <EditProfileModal
            isOpen={activeModal === "edit"}
            handleCloseModal={closeActiveModal}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            onEdit={handleEdit}
          />
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
