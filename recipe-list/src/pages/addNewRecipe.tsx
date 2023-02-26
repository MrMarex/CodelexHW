import React, { useState } from 'react';
import axios from 'axios';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import endpoint from '@/utils/endpoint';
import router from 'next/router';
import style from '../styles/AddNewRecipePage.module.scss';

export default function AddNewRecipeForm () {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState('');
    const [category, setCategory] = useState('');

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newRecipe = {
            title,
            image,
            ingredients,
            recipe,
            category,
        };
        try {
            const response = await axios.post(`${endpoint}/addRecipe`, newRecipe);
            console.log('response', response);
            router.push('/recipes');
        } catch (error) {
            console.error('error', error);
        }
    };

    return (
        <MainLayout title='Add new recipe'>
            <form onSubmit={handleFormSubmit} className={style.newRecipeForm}>
                <label htmlFor="title" className={style.formLabel}>Title: <br />
                    <input
                        type="text"
                        id="title"
                        placeholder="Pancakes..."
                        value={title}
                        className={style.formInput}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label htmlFor="image" className={style.formLabel}>Image URL: <br />
                    <input
                        type="text"
                        id="image"
                        placeholder="https://image.url..."
                        value={image}
                        className={style.formInput}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <label htmlFor="ingredients" className={style.formLabel}>Ingredients: <br />
                    <textarea
                        id="ingredients"
                        placeholder="Sour cream, sugar, eggs, milk..."
                        value={ingredients}
                        className={style.formTextArea}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </label>
                <label htmlFor="recipe" className={style.formLabel}>Recipe: <br />
                    <textarea
                        id="recipe"
                        placeholder="Mix 2 eggs with milk..."
                        value={recipe}
                        className={style.formTextArea}
                        onChange={(e) => setRecipe(e.target.value)}
                    />
                </label>
                <label htmlFor="category" className={style.formLabel}>Category: <br />
                    <input
                        type="text"
                        id="category"
                        placeholder="Pancakes..."
                        value={category}
                        className={style.formInput}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </label>
                <button type="submit" className={style.button}>Add new recipe</button>
            </form>
        </MainLayout>
    );
}
