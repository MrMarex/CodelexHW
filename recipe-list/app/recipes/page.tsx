'use client'

import Link from 'next/link';
import { RecipeType, useGetAllRecipesQuery } from '@/slices/recipesSlice';
import MainLayout from '../layout';
import RecipesList from '../components/RecipesList/RecipesList';
import RecipesListItem from '../components/RecipesListItem/RecipesListItem';

export default function Recipes() {
    const { data: recipes = [], isLoading } = useGetAllRecipesQuery();
    recipes.push({
        title: 'Test',
        image: 'https://picsum.photos/200/300',
        recipe: 'Get that meal done',
        ingredients: 'Patience, luck',
        _id: 'a1'
    })
    console.log(recipes)

    return (
        <MainLayout title='Recipe details'>
            <RecipesList>
                {recipes.map((recipe: RecipeType) => (
                    <Link key={recipe._id} href={`/recipes/${recipe._id}`}>
                        <RecipesListItem key={recipe._id} image={recipe.image} title={recipe.title} />
                    </Link>
                ))}
            </RecipesList>
        </MainLayout>
    );
}