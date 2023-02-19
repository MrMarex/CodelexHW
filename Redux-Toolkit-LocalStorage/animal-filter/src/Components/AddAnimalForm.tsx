import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnimal, addSpecies } from '../Store/AnimalSlice';
import { RootState } from '../Store/store';

const AddAnimalForm = () => {
    const dispatch = useDispatch();
    const speciesArr = useSelector((state: RootState) => state.animals.species);

    const [name, setName] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string>('');
    const [species, setSpecies] = useState<string>('');
    const [newSpecies, setNewSpecies] = useState<string>('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleImageSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => setImageSrc(e.target.value);
    const handleSpeciesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSpecies = e.target.value;
        if (selectedSpecies === 'new') {
            setSpecies('new');
            setNewSpecies('');
        } else {
            setSpecies(selectedSpecies);
        }
    };
    const handleNewSpeciesChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewSpecies(e.target.value);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const animal = {
            name,
            imageSrc,
            species: species === 'new' ? newSpecies : species,
        };
        dispatch(addAnimal(animal));
        if (species === 'new') {
            dispatch(addSpecies(newSpecies));
        }
        setName('');
        setImageSrc('');
        setSpecies('');
        setNewSpecies('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} required />

            <label htmlFor="imageSrc">Image URL</label>
            <input type="url" id="imageSrc" value={imageSrc} onChange={handleImageSrcChange} required />

            <label htmlFor="species">Species</label>
            <select id="species" value={species} onChange={handleSpeciesChange}>
                <option value="">Choose a species</option>
                {speciesArr.map((species) => (
                    <option key={species} value={species}>
                        {species}
                    </option>
                ))}
                <option value="new">Add new species</option>
            </select>

            {species === 'new' && (
                <div>
                    <label htmlFor="newSpecies">New species name</label>
                    <input type="text" id="newSpecies" value={newSpecies} onChange={handleNewSpeciesChange} required />
                </div>
            )}

            <button type="submit">Add animal</button>
        </form>
    );
};

export default AddAnimalForm;
