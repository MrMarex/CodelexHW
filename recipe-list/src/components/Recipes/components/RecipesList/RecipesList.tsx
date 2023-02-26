import React from 'react';
import style from './RecipesList.module.scss';

type RecipesListProps = {
    children: React.ReactNode
}

export default function RecipesList (props: RecipesListProps) {
    const { children } = props;

    return (
        <div className={style.listWrap}>
            {children}
        </div>
    );
}
