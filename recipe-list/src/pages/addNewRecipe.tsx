import React, { useState, useCallback } from 'react';
import axios from 'axios';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import endpoint from '@/utils/endpoint';
import router from 'next/router';
import style from '../styles/AddNewRecipePage.module.scss';

interface FormData {
  title: string;
  image: string;
  ingredients: string;
  recipe: string;
  category: string;
}

interface ResponseData {
  message: string;
}

export default function AddNewRecipeForm () {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        image: '',
        ingredients: '',
        recipe: '',
        category: '',
    });

    const {
        title, image, ingredients, recipe, category,
    } = formData;

    const handleFormSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            try {
                const response = await axios.post<ResponseData>(`${endpoint}/addRecipe`, formData);
                console.log('response', response);
                router.push('/recipes');
            } catch (error) {
                console.error('error', error);
            }
        },
        [formData],
    );

    // eslint-disable-next-line max-len
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    return (
        <MainLayout title="Add new recipe">
            <form onSubmit={handleFormSubmit} className={style.newRecipeForm}>
                <label htmlFor="title" className={style.formLabel}>
          Title: <br />
                    <input
                        type="text"
                        id="title"
                        placeholder="Pancakes..."
                        name="title"
                        value={title}
                        required
                        className={style.formInput}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="image" className={style.formLabel}>
          Image URL: <br />
                    <input
                        type="text"
                        id="image"
                        placeholder="https://image.url..."
                        name="image"
                        value={image}
                        required
                        className={style.formInput}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="ingredients" className={style.formLabel}>
          Ingredients: <br />
                    <textarea
                        id="ingredients"
                        placeholder="Sour cream, sugar, eggs, milk..."
                        name="ingredients"
                        value={ingredients}
                        required
                        className={style.formTextArea}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="recipe" className={style.formLabel}>
          Recipe: <br />
                    <textarea
                        id="recipe"
                        placeholder="Mix 2 eggs with milk..."
                        name="recipe"
                        value={recipe}
                        required
                        className={style.formTextArea}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="category" className={style.formLabel}>
          Category: <br />
                    <input
                        type="text"
                        id="category"
                        placeholder="Pancakes..."
                        name="category"
                        value={category}
                        required
                        className={style.formInput}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit" className={style.button}>
          Add new recipe
                </button>
            </form>
        </MainLayout>
    );
}
