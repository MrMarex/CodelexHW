"use client"

import { useRouter } from 'next/router';
import { useGetByIDRecipeQuery } from '@/slices/recipesSlice';
import MainLayout from '@/app/layout';

export default function Recipe () {
    const { query } = useRouter();
    const { data, isLoading } = useGetByIDRecipeQuery(String(query.id));

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    const {
        _id,
        image,
        ingredients,
        recipe,
        title,
    } = data;

    return (
        <MainLayout title='Recipe'>
            <div>
                <img
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                />
            </div>
            <div>{ingredients}</div>
            <div>{recipe}</div>
        </MainLayout>
    );
}