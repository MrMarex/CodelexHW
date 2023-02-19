import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddAnimalForm from './Components/AddAnimalForm';
import { RootState } from './Store/store';
import AnimalListItem from './Components/AnimalListItem';

const App: React.FC = () => {
  const animals = useSelector((state: RootState) => state.animals.animals);
  const speciesArr = useSelector((state: RootState) => state.animals.species);

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
          <option value="">Show all</option>
                {speciesArr.map((species) => (
                    <option key={species} value={species}>
                        {species}
                    </option>
                ))}
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