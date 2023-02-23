import { RecipeType } from '@/slices/recipesSlice';

type TRecipesItemProps = Omit<RecipeType, '_id' | 'ingredients' | 'recipe'>

export default function RecipesItem (props: TRecipesItemProps) {
    const {
        image,
        title,
    } = props;

    return (
        <div>
            <img src={image} alt={title}/>
            <span>
                {title}
            </span>
        </div>
    );
}