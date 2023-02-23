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
});

const Recipes = models.Recipe || mongoose.model('Recipes', recipeSchema);

export default Recipes;