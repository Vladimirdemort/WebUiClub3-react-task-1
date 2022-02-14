
// import alphabet from 'shortid/lib/alphabet';
import s from './FilterPanel.module.css';

export default function FilterPanel({ alphabet, price, sex }) {
  return (
    <form className={s.filter__form} action="">
      <select onChange={alphabet} className={s.filter__select}>
        <option value="default">Alphabet</option>
        <option value="alpha">A-Z</option>
        <option value="zero">Z-A</option>
      </select>
      <select onChange={price} className={s.filter__select}>
        <option value="default">Price</option>
        <option value="lowest">Lowest price</option>
        <option value="highest">Highest price</option>
      </select>
      <select className={s.filter__select}>
        <option value="default">Men/Woman</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
      <button className={s.filter__button} type="submit">
        Apply
      </button>
    </form>
  );
}

