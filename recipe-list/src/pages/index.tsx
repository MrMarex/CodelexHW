import MainLayout from '@/layouts/MainLayout/MainLayout';
import style from '../styles/HomePage.module.scss';

export default function Home () {
    return (
        <MainLayout title='Home'>
            <h1 className={style.title}>
                Home page.
            </h1>
            <p className={style.paragraph}>
                Welcome to the Recipe Blog, where you can explore a variety of delicious
                recipes to satisfy your taste buds! Our blog features recipes for all occasions
                and meals, including breakfast, lunch, dinner, and dessert. From classic comfort
                foods to unique and exotic dishes, our recipes are sure to impress and inspire you
                to get creative in the kitchen. Each recipe is carefully crafted and tested,
                ensuring that they are easy to follow and produce great results. So whether
                you`re a seasoned cook or just starting out, we have something for everyone.
                Browse our collection of recipes today and get ready to whip up something delicious!
            </p>
        </MainLayout>
    );
}
