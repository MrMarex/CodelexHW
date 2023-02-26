import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import style from './RecipeLayout.module.scss';

type TRecipeLayoutProps = {
  children: React.ReactNode;
  onDelete?: () => void;
};

export default function RecipeLayout ({ children, onDelete }: TRecipeLayoutProps) {
    return (
        <>
            <main>
                {children}
                <div className={style.buttonsWrap}>
                    {onDelete && (
                        <Button
                            label="Delete recipe"
                            type="button"
                            onClick={onDelete}
                        />
                    )}
                    <Link href={'/recipes'}>
                        <Button label="Back to all recipes" type="button" />
                    </Link>
                </div>
            </main>
        </>
    );
}
