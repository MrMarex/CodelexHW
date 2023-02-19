import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnimal, addSpecies } from '../../Store/AnimalSlice';
import { RootState } from '../../Store/store';
import './AddAnimalForm.css';

const AddAnimalForm = () => {
    const dispatch = useDispatch();
    const speciesArr = useSelector(({ animals }: RootState) => animals.species);

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
        <form className='form-add-animal' onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:<br/>
                <input
                    className='input-field input-field--name'
                    placeholder='Lion...'
                    type="text" id="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />
            </label>
            <label htmlFor="imageSrc">
                Image URL:<br/>
                <input
                    className='input-field input-field--image'
                    placeholder='Image URL...'
                    type="url" id="imageSrc"
                    value={imageSrc}
                    onChange={handleImageSrcChange}
                    required
                />
            </label>
            <label htmlFor="species">Species</label>
            <select
                className='input-select'
                id="species"
                value={species}
                onChange={handleSpeciesChange}>
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
                    <input
                        className='input-field input-field--new-specie'
                        type="text"
                        id="newSpecies"
                        value={newSpecies}
                        onChange={handleNewSpeciesChange}
                        required
                        placeholder='New specie...'
                    />
                </div>
            )}

            <button className='btn btn--add-animal' type="submit">Add new animal</button>
        </form>
    );
};

export default AddAnimalForm;
