import { NavLink } from 'react-router-dom';
import './Header.css';
import { useTranslation } from 'react-i18next';

const getActiveLinkClassName = (isActive : boolean) => (isActive ? 'link link--active' : 'link');

function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <nav className="navigation">
      <NavLink
          className={({ isActive }) => getActiveLinkClassName(isActive)}
          to="/"
        >
          {t('home')}
        </NavLink>
        <NavLink
          className={({ isActive }) => getActiveLinkClassName(isActive)}
          to="/game"
        >
          {t('game')}
        </NavLink>
        <NavLink
          className={({ isActive }) => getActiveLinkClassName(isActive)}
          to="/all-players"
        >
          {t('allPlayers')}
        </NavLink>
        <NavLink
          className={({ isActive }) => getActiveLinkClassName(isActive)}
          to="/statistics"
        >
          {t('statistics')}
        </NavLink>
      </nav>
    </header>
  )

};

export default Header;