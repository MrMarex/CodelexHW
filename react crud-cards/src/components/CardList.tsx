import Card from "./Card";
import { CardId } from "../assets/ts/interfaces";

type CardListProps = {
  cards: CardId[];
  deleteCard: deleteCardF;
  editCard: editCard;
};

export default function CardList({
  cards,
  deleteCard,
  editCard,
}: CardListProps) {
  return (
    <div className="main-container">
      {cards.length === 0 ? (
        <h1>Card list is empty</h1>
      ) : (
        cards.map((card) => (
          <Card key={card.id} card={card} deleteCard={() => {
              deleteCard(card);
            }}
            editCard={() => {
              editCard(card);
            }}
          />
        ))
      )}
    </div>
  );
}