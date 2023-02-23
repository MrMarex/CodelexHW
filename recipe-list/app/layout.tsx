'use client'

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '@/store/store';

type MainLayoutProps = {
    children: React.ReactNode;
    title: string;
}

export default function MainLayout ({ children, title }: MainLayoutProps) {
    return ( 
        <Provider store={store}>
            <Head>
                <title>{title} | NextJS Catalog for recipes</title>
            </Head>
            <nav
            >
                <Link href={'/'}>
                    <span >
                        home
                    </span>
                </Link>
                <Link href={'/recipes'}>
                    <span>
                        recipes
                    </span>
                </Link>
            </nav>
            <main>
                {children}
            </main>
        </Provider>
    );
}