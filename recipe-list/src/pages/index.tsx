import MainLayout from '@/layouts/MainLayout/MainLayout';
import style from '../styles/HomePage.module.scss';

export default function Home () {
    return (
        <MainLayout title='Home'>
            <h1 className={style.title}>
                Home page.
            </h1>
            <p className={style.paragraph}>
                This is page for different recipes.
            </p>
        </MainLayout>
    );
}
