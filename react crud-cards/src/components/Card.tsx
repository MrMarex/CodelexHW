import { CardId } from "../assets/ts/interfaces";

export type CardProp = {
  card: CardId;
  deleteCard: deleteCardF;
  editCard: editCard;
};

export default function Card({ card, deleteCard, editCard }: CardProp) {
  return (
    <div className="card">
      <img src={card.image} alt="image" />
      <div>
        <h2>{card.name}</h2>
        <p>{card.description}</p>
        <div>
          <button onClick={deleteCard}> Delete </button>
          <button onClick={editCard}> Edit </button>
        </div>
      </div>
    </div>
  );
}