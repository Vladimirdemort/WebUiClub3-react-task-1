import Section from 'components/Section/Section';
import s from './FilterPanel.module.css';

export default function FilterPanel() {
  return (
    <Section>
      <form action="">
        <select>
          <option value="value1">value 1</option>
          <option value="value2">value 2</option>
          <option value="value3">value 3</option>
        </select>
        <select>
          <option value="value1">value 1</option>
          <option value="value2">value 2</option>
          <option value="value3">value 3</option>
        </select>
        <select>
          <option value="value1">value 1</option>
          <option value="value2">value 2</option>
          <option value="value3">value 3</option>
        </select>
        <button type="submit"></button>
      </form>
    </Section>
  );
}
