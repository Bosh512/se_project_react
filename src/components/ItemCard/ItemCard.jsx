import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
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
