'use client'

import { RecipeType, useGetAllRecipesQuery } from '@/slices/recipesSlice';
import Link from 'next/link';
import RecipesList from '../components/RecipesList/RecipesList';
import RecipesListItem from '../components/RecipesListItem/RecipesListItem';

export default function Recipes() {
    const { data: recipes, isLoading } = useGetAllRecipesQuery();

    console.log(recipes)
    console.log('---');

    if (!recipes) {
        return <div>Data Undefined!</div>
    }

    if(isLoading) {
        return <div>Loading...</div>
    }
    
    return (
            <RecipesList>
                {recipes.map((recipe: RecipeType) => (
                    <Link key={recipe._id} href={`/recipes/${recipe._id}`}>
                        <RecipesListItem key={recipe._id} image={recipe.image} title={recipe.title} />
                    </Link>
                ))}
            </RecipesList>
    );
}