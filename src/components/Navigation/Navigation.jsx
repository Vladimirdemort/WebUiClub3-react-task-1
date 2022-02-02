import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Catalog
      </NavLink>
      <NavLink
        to=""
        className={({ isActive }) => (isActive ? s.active : s.link)}
      >
        Cart
      </NavLink>
    </nav>
  );
}
