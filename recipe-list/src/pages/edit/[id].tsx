/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import axios from 'axios';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import RecipeLayout from '@/layouts/RecipeLayout/RecipeLayout';
import endpoint from '@/utils/endpoint';
import style from '../../styles/RecipePage.module.scss';
import { RecipesType } from '../recipes';

type TRecipeProps = {
  recipe: RecipesType;
};

export default function EditRecipe ({ recipe: recipeData }: TRecipeProps) {
    const router = useRouter();
    const [recipe, setRecipe] = useState(recipeData);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const { data } = await axios.put(`${endpoint}/updateRecipe?id=${recipe._id}`, recipe);
            console.log(data);
            router.push('/recipes');
        } catch (error) {
            console.error(error);
        }
    };

    const {
        title, ingredients, recipe: instructions, image,
    } = recipe;

    return (
        <MainLayout title={title}>
            <RecipeLayout>
                <div className={style.recipesWrap}>
                    <h2 className={style.header}>Edit {title}</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label>
              Title:
                            <input type="text" name="title" value={title} onChange={handleInputChange} />
                        </label>
                        <label>
              Ingredients:
                            <textarea name="ingredients" value={ingredients} onChange={handleInputChange} />
                        </label>
                        <label>
              Recipe:
                            <textarea name="recipe" value={instructions} onChange={handleInputChange} />
                        </label>
                        <label>
              Image:
                            <input type="text" name="image" value={image} onChange={handleInputChange} />
                        </label>
                        <button type="submit">Update Recipe</button>
                    </form>
                    <Image src={image} alt={title} width={350} height={350} />
                </div>
            </RecipeLayout>
        </MainLayout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: recipes } = await axios.get<RecipesType[]>(`${endpoint}/getRecipes`);

    const paths = recipes.map(({ _id: id }) => ({
        params: { id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{ recipe: RecipesType }> = async ({ params }) => {
    const id = params?.id;
    const { data: recipe } = await axios.get<RecipesType>(`${endpoint}/${id}`);

    return {
        props: { recipe },
    };
};
