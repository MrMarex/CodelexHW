import { NavLink } from 'react-router-dom';
import './Header.css';

const getActiveLinkClassName = (isActive : boolean) => (isActive ? 'link link--active' : 'link');

const Header = () => (
  <header>
    <nav className="navigation">
    <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/blogs"
      >
        Blogs
      </NavLink>
      <NavLink
        className={({ isActive }) => getActiveLinkClassName(isActive)}
        to="/add-post"
      >
        Add Post
      </NavLink>
    </nav>

  </header>

);

export default Header;