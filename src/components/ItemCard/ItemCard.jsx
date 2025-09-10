import "./ItemCard.css";
import { useState } from "react";
import heart from "../../assets/heart.svg";
import heart1 from "../../assets/heart1.svg";

function ItemCard({ item, onCardClick, onCardLike, currentUser }) {
  const isLiked = item.likes && item.likes.includes(currentUser?.userData?._id);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = ({ item, isLiked }) => {
    onCardLike({ _id: item._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__container">
        <h2 className="card__name">{item.name}</h2>
        {currentUser.isLoggedIn && (
          <button
            type="button"
            className="card__like-button"
            onClick={() => {
              handleLike({ item, isLiked });
            }}
          >
            <img
              className="card__like-button_image"
              src={isLiked ? heart : heart1}
              alt="!PLACEHOLDER!"
            />
          </button>
        )}
      </div>
      <img
        onClick={() => {
          handleCardClick();
        }}
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
      ></img>
    </li>
  );
}

export default ItemCard;
