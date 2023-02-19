//Comment is error somehow
import mongoose from 'mongoose';

export interface IAnimal extends mongoose.Document {
    name: string,
    imageUrl: string,
    species: string,
}

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
});

export const Animal = mongoose.model<IAnimal>('Animal', animalSchema);