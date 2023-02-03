import { useState } from "react";
import { CardId } from "../assets/ts/interfaces";
import '../App.css';

type CardFormProps = {
  onSubmit: onSubmit;
  name: string;
  onClose?: onClose;
  card?: CardId;
};

export default function CardForm({ onSubmit, name, onClose, card }: CardFormProps) {
  const [cardName, setCardName] = useState(card?.name || "");
  const [cardDescription, setCardDescription] = useState(card?.description || "");
  const [cardImage, setCardImage] = useState( card?.image || "https://picsum.photos/200/100");

  const passCardInfo = () => {
      onSubmit({
        name: cardName,
        description: cardDescription,
        image: cardImage,
        id: card?.id,
      });
  };

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        passCardInfo();
      }}
      >
      <button onClick={onClose}> Cancel </button>
      <h2>{name}</h2>
      <input
        type="text"
        placeholder="Name"
        defaultValue={cardName}
        onChange={(e) => setCardName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        required
        defaultValue={cardDescription}
        onChange={(e) => setCardDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        required
        defaultValue={cardImage}
        onChange={(e) => setCardImage(e.target.value)}
      />
      <button> Save </button>
    </form>
  );
}