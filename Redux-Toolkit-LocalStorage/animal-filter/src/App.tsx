import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddAnimalForm from './Components/AddAnimalForm';
import { RootState } from './Store/store';
import AnimalListItem from './Components/AnimalListItem';

const App: React.FC = () => {
  const animals = useSelector((state: RootState) => state.animals.animals);
  const [selectedSpecies, setSelectedSpecies] = useState('');

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecies(event.target.value);
  };

  const filteredAnimals = selectedSpecies ? animals.filter((animal) => animal.species === selectedSpecies) : animals;

  return (
    <div>
      <h1>Animal List</h1>
      {animals.length === 0 ? (
        <div>
          <p>No animals added.</p>
        </div>
      ) : (
        <>
          <label htmlFor="species">Filter by species:</label>
          <select id="species" name="species" value={selectedSpecies} onChange={handleSpeciesChange}>
            <option value="">All</option>
            <option value="unknown">Unknown</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="chicken">Chicken</option>
            <option value="donkey">Donkey</option>
            <option value="rabbit">Rabbit</option>
            <option value="horse">Horse</option>
          </select>
          <ul>
            {filteredAnimals.map((animal, index) => (
              <AnimalListItem key={index} animal={animal} index={index} />
            ))}
          </ul>
        </>
      )}
      <AddAnimalForm />
    </div>
  );
};

export default App;
