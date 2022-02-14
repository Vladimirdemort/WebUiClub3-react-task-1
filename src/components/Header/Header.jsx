import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';
import SearchNav from '../btn/SearchNav';

export default function Header() {
  const currentLocation = useLocation().pathname;
  
  return (
    <header className={s.header}>
        <h1 className={s.header__logo}>Shoes</h1>
      <Navigation />
          <div className='header__search'>
            {currentLocation === '/catalog' && <SearchNav />}
          </div>
    </header>
  );
}
