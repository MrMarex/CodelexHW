import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Animal {
    name: string;
    imageSrc: string;
    species: string;
}

interface AnimalState {
    animals: Animal[];
    species: string[];
}

const initialState: AnimalState = {
    animals: localStorage.getItem('animals') ? JSON.parse(localStorage.getItem('animals')!) : [],
    species: localStorage.getItem('species') ? JSON.parse(localStorage.getItem('species')!) : []
};

const animalsSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        addAnimal: (state, action: PayloadAction<Animal>) => {
            state.animals.push(action.payload);
            localStorage.setItem('animals', JSON.stringify(state.animals));
        },
        addSpecies: (state, action: PayloadAction<string>) => {
            state.species.push(action.payload);
            localStorage.setItem('species', JSON.stringify(state.species));
        },
        removeAnimal: (state, action: PayloadAction<number>) => {
            state.animals = state.animals.filter((_, index) => index !== action.payload);
            localStorage.setItem('animals', JSON.stringify(state.animals));
        },
    }
});

export const { addAnimal, addSpecies, removeAnimal } = animalsSlice.actions;
export default animalsSlice.reducer;