import './SearchNav.css';
import { BsSearch } from 'react-icons/bs';

const SearchNav = () => {
  return (
    <div className='searchInput'>
      <input className='searchInput__input' />
      <BsSearch className='searchInput__icon' />
    </div>
  );
};

export default SearchNav;