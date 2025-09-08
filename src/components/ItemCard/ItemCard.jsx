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
    console.log(item);
    onCardLike({ _id: item._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__container">
        <h2 className="card__name">{item.name}</h2>
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
          {/* <img src={heart1} alt="heart1" /> */}
        </button>
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
