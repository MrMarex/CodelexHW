import { useEffect, useState } from "react";
import axios, { Canceler } from "axios";
import CardList from "./components/CardList";
import { CardId, MainCard } from "./assets/ts/interfaces";
import CardForm from "./components/CardForm";

const endpoint = 'http://localhost:3004/exercises';

function App() {
  const [cards, setCards] = useState<CardId[]>([]);
  const [editing, setEditing] = useState(false);
  const [editableCard, setEditableCard] = useState<CardId>({
    id: -1,
    name: '',
    image: '',
    description: ''
  });

  useEffect(() => {
    let cancel: Canceler;
    axios
      .get<CardId[]>(endpoint, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then(({ data }) => {
        setCards(data);
      })

    return () => cancel();
  }, []);

  const addCard = (idCard: MainCard) => {
    axios
      .post<CardId>(endpoint, idCard)
      .then(({ data }) => {
        setCards([...cards, data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCard = (idCard: CardId) => {
    axios
      .delete(`${endpoint}/${idCard.id}`)
      .then(() => {
        console.log(idCard);
        let updatedList: CardId[] = cards.filter(
          (card) => card.id !== idCard.id
        );
        setCards(updatedList);
      })
  };

  const closeEditScreen = () => {
    setEditing(false);
  };

  const editCard = (idCard: CardId) => {
    if (editing) {
      return alert("Please finish editing first");
    }
    setEditing(true);
    setEditableCard(idCard);
  };

  const saveCard = (idCard: CardId) => {
    axios
      .put<CardId>(`${endpoint}/${idCard.id}`, idCard)
      .then(() => {
        let updatedList: CardId[] = cards.filter(
          (card) => card.id !== idCard.id
        );
        setCards([...updatedList, idCard]);
      })

    setEditing(false);
  };

  return (
    <div className="main-container">
      <h1>CRUD</h1>
      <h5>(Edit dialog shows on top of the page)</h5>
      {!editing ? (
        <></>
      ) : (
        <CardForm
          onSubmit={saveCard}
          name={"EDIT"}
          onClose={closeEditScreen}
          card={editableCard}
        />
      )}
      <CardList cards={cards} deleteCard={deleteCard} editCard={editCard} />
      <CardForm onSubmit={addCard} name={"ADD NEW"} />
    </div>
  );
}

export default App;