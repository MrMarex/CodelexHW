import './HomePage.css';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <><h1 className='home-heading'>{t('title')}</h1>
        <p className='home-about'> {t('gameInfo')}<br /><br />
         <span className='instruction'>
            {t('instructions')}
         </span>
         </p></>
    )
}

export default HomePage;