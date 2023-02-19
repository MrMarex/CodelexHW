import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddAnimalForm from './Components/AddAnimalForm/AddAnimalForm';
import { RootState } from './Store/store';
import AnimalListItem from './Components/AnimalListItem/AnimalListItem';
import './App.css'

const App: React.FC = () => {
  const animals = useSelector((state: RootState) => state.animals.animals);
  const speciesArr = useSelector((state: RootState) => state.animals.species);

  const [selectedSpecies, setSelectedSpecies] = useState('');

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecies(event.target.value);
  };

  const filteredAnimals = selectedSpecies ? animals.filter((animal) => animal.species === selectedSpecies) : animals;

  return (
    <div className='App'>
      <h1 className='app-heading'>Animal list.</h1>
      {animals.length === 0 ? (
        <div>
          <p className='no-animals'>No animals added.</p>
        </div>
      ) : (
        <>
          <select
            className='input-select'
            id="species"
            name="species"
            value={selectedSpecies}
            onChange={handleSpeciesChange}>
            <option value="">Filter by specie</option>
            {speciesArr.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
          <div className='animal-list'>
            {filteredAnimals.map((animal, index) => (
              <AnimalListItem key={index} animal={animal} index={index} />
            ))}
          </div>
        </>
      )}
      <AddAnimalForm />
    </div>
  );
};

export default App;