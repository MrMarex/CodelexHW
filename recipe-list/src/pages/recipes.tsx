import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import RecipesItem from '@/components/Recipes/components/PecipesItem/RecipesItem';
import RecipesList from '@/components/Recipes/components/RecipesList/RecipesList';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import endpoint from '@/utils/endpoint';
import style from '../styles/RecipesPage.module.scss';

export type RecipesType = {
    _id: string;
    title: string;
    image: string;
    ingredients: string;
    recipe: string;
    category: string;
}

interface RecipesProps {
    recipes: RecipesType[];
}

export default function Recipes ({ recipes }: RecipesProps) {
    const [category, setCategory] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const categories = Array.from<string>(
        new Set(recipes.map((recipe: RecipesType) => recipe.category)),
    );

    function filterByCategory (categoryFilter: string | null) {
        setCategory(categoryFilter);
    }

    const filteredRecipes: RecipesType[] = recipes
        .filter((recipe: RecipesType) => category === null || recipe.category === category)
        // eslint-disable-next-line max-len
        .filter((recipe: RecipesType) => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <MainLayout title='Recipes'>
            <div className={style.searchRecipe}>
                <input
                    type='text'
                    placeholder='Search recipe...'
                    className={style.searchBox}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className={style.filterButtons}>
                <button
                    className={style.filterButton}
                    onClick={() => filterByCategory(null)}>
                        Show all
                </button>
                {categories.map((categoryItem) => (
                    <button
                        className={style.filterButton}
                        key={categoryItem}
                        onClick={() => filterByCategory(categoryItem)}
                    >
                        {categoryItem}
                    </button>
                ))}
            </div>
            <RecipesList>
                {filteredRecipes.map(({ _id, image, title }) => (
                    <Link key={_id} href={'/recipe/[id]'} as={`/recipe/${_id}`}>
                        <RecipesItem key={_id} image={image} title={title} />
                    </Link>
                ))}
            </RecipesList>
        </MainLayout>
    );
}

export const getStaticProps = async () => {
    const { data: recipes } = await axios.get<RecipesType[]>(
        `${endpoint}/getRecipes`,
    );
    return {
        props: {
            recipes,
        },
    };
};
