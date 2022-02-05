import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
        <h1 className={s.header__logo}>Shoes</h1>
      <Navigation />
      <div className="searchMenu">
        <input type="text" placeholder="Search.."/>
        <button>Search</button>
      </div>
    </header>
  );
}
