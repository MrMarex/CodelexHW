import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const endpoint = 'http://localhost:5000/exercises';

interface Card {
  id: number;
  name: string;
  description: string;
  image: string;
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    axios.get<Card[]>(endpoint).then(response => {
      setCards(response.data);
    });
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`${endpoint}/${id}`).then(() => {
      setCards(cards.filter(card => card.id !== id));
    });
  };

  return (
    <div>
      {cards.map(card => (
        <div key={card.id} className='card'>
          <img src={card.image} alt={card.name} />
          <h2>{card.name}</h2>
          <p>{card.description}</p>
          <button onClick={() => handleDelete(card.id)}>Delete</button>
          {/* <button onClick={() => handleEdit(card.id)}>Edit</button> */}
        </div>
      ))}
    </div>
  );
};

const AddCardForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post<Card>(endpoint, { name, description, image })
      .then(() => {
        setName('');
        setDescription('');
        setImage('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={description}
        onChange={event => setDescription(event.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={image}
        onChange={event => setImage(event.target.value)}
        placeholder="Image URL"
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

const App: React.FC = () => (
  <div className='main-container'>
    <h1>CRUD</h1>
    <div className="cards">
      <CardList />
    </div>
    <AddCardForm />
  </div>
);

export default App;
