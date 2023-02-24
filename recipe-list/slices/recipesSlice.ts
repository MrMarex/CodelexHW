import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type RecipeType = {
    title: string;
    ingredients: string;
    recipe: string;
    image: string;
    _id: string;
}

export const recipesAPI = createApi({
    reducerPath: 'recipes',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: (builder) => ({
        getAllRecipes: builder.query<RecipeType[], void>({
            query: () => '/recipes/getRecipes',
        }),
        getByIDRecipe: builder.query<RecipeType, string>({
            query: (id) => `/recipes/${id}`,
        }),
    }),
});

export const { useGetAllRecipesQuery, useGetByIDRecipeQuery } = recipesAPI;