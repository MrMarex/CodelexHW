import Image from 'next/image';
import style from './RecipesItem.module.scss';

type RecipesItemProps = {
    image: string;
    title: string;
}

export default function RecipesItem (props: RecipesItemProps) {
    const {
        image,
        title,
    } = props;

    return (
        <div className={style.recipeCard}>
            <Image
                src={image}
                alt={title}
                width={350}
                height={400}
            />
            <span
                className={style.cardTitle}
            >
                {title}
            </span>
        </div>
    );
}
