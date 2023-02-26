import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import style from './MainLayout.module.scss';

type TMainLayoutProps = {
    children: React.ReactNode;
    title: string;
}

export default function MainLayout ({ children, title }: TMainLayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav className={style.navigation}>
                <Link
                    href={'/'}
                    className={style.navText}
                >
                    <span>
                        Home
                    </span>
                </Link>
                <Link
                    href={'/recipes'}
                    className={style.navText}
                >
                    <span>
                        Recipes
                    </span>
                </Link>
                <Link
                    href={'/addNewRecipe'}
                    className={style.navText}
                >
                    <span>
                        Add new recipe
                    </span>
                </Link>
            </nav>
            <main className={style.children}>
                {children}
            </main>
        </>
    );
}
