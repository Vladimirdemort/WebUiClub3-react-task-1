import Section from 'components/Section/Section';
import s from './FilterPanel.module.css';

export default function FilterPanel() {
  return (
    <form className={s.filter__form} action="">
      <select className={s.filter__select}>
        <option value="value1">Filter 1</option>
        <option value="value2">value 2</option>
        <option value="value3">value 3</option>
      </select>
      <select className={s.filter__select}>
        <option value="value1">Filter 2</option>
        <option value="value2">value 2</option>
        <option value="value3">value 3</option>
      </select>
      <select className={s.filter__select}>
        <option value="value1">Filter 3</option>
        <option value="value2">value 2</option>
        <option value="value3">value 3</option>
      </select>
      <button className={s.filter__button} type="submit">
        Apply
      </button>
    </form>
  );
}
