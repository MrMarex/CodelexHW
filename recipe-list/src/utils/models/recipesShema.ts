import mongoose, { models, Schema } from 'mongoose';

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    recipe: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
});

const Recipe = models.Recipe || mongoose.model('Recipe', recipeSchema);

export default Recipe;
