import Image from 'next/image';
import axios from 'axios';
import { GetStaticProps } from 'next';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import RecipeLayout from '@/layouts/RecipeLayout/RecipeLayout';
import endpoint from '@/utils/endpoint';
import { useRouter } from 'next/router';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import style from '../../styles/RecipePage.module.scss';
import { RecipesType } from '../recipes';

type TRecipeProps = {
  recipe: RecipesType;
};

export default function Recipe ({ recipe: recipeData }: TRecipeProps) {
    const router = useRouter();
    const {
        title,
        ingredients,
        recipe,
        image,
        _id: id,
    } = recipeData;

    const handleDelete = async () => {
        try {
            await axios.delete(`${endpoint}/deleteRecipe?id=${id}`);
            router.push('/recipes');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <MainLayout title={title}>
            <RecipeLayout onDelete={handleDelete}>
                <div className={style.recipesWrap}>
                    <h2 className={style.header}>{title}</h2>
                    <Image src={image} alt={title} width={350} height={350} />
                    <div>
                        <div>{ingredients}</div>
                        <div className={style.recipeWrap}>
                            <h4 className={style.title}>Recipe:</h4>
                            <span className={style.recipe}>{recipe}</span>
                        </div>
                    </div>
                </div>
            </RecipeLayout>
            <Link href={`/edit/${id}`}>
                <Button label='Edit' type='button' />
            </Link>
        </MainLayout>
    );
}

export const getStaticPaths = async () => {
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
