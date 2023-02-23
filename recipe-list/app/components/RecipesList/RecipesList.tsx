import React from 'react';

type TRecipesListProps = {
    children: React.ReactNode
}

export default function RecipesList (props: TRecipesListProps) {
    const { children } = props;

    return (
        <div>
            {children}
        </div>
    );
}