import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnimal, addSpecies } from '../Store/AnimalSlice';

const AddAnimalForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string>('');
    const [species, setSpecies] = useState<string>('');
    const [newSpecies, setNewSpecies] = useState<string>('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleImageSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => setImageSrc(e.target.value);
    const handleSpeciesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSpecies = e.target.value;
        if (selectedSpecies === 'new') {
            setSpecies('');
            setNewSpecies('');
        } else {
            setSpecies(selectedSpecies);
        }
    };
    const handleNewSpeciesChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewSpecies(e.target.value);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const animal = { name, imageSrc, species };
        if (newSpecies) {
            dispatch(addSpecies(newSpecies));
            animal.species = newSpecies;
        }
        dispatch(addAnimal(animal));
        setName('');
        setImageSrc('');
        setSpecies('');
        setNewSpecies('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Animal Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} required />

            <label htmlFor="imageSrc">Image Src</label>
            <input type="text" id="imageSrc" value={imageSrc} onChange={handleImageSrcChange} required />

            <label htmlFor="species">Species</label>
            <select id="species" value={species} onChange={handleSpeciesChange}>
                <option value="unknown">Unknown</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="chicken">Chicken</option>
                <option value="donkey">Donkey</option>
                <option value="rabbit">Rabbit</option>
                <option value="horse">Horse</option>
            </select>
            {species === 'new' && (
                <input type="text" id="newSpecies" value={newSpecies} onChange={handleNewSpeciesChange} required />
            )}

            <button type="submit">Add Animal</button>
        </form>
    );
};

export default AddAnimalForm;
