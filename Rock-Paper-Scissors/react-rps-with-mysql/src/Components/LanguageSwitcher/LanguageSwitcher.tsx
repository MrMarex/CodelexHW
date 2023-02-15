import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
        <button
            className='lng lng-en'
            onClick={() => changeLanguage('en')}>
        </button>
        <button
            className='lng lng-lv'
            onClick={() => changeLanguage('lv')}>
        </button>
        <button
            className='lng lng-ru'
            onClick={() => changeLanguage('ru')}>
        </button>
    </div>
  );
}

export default LanguageSwitcher;