
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
// import { useState } from 'react';
// // import Section from './Section/Section';
// import s from './FilterPanel.module.css';
// import ApplyBtn from 'components/btn/ApplyBtn';
// import  Select  from 'components/btn/Select';


// const filterOption1 = [
//   { value: '', name: 'Filter by size' },
//   { value: '', name: 'All size' },
//   { value: '39', name: '39' },
//   { value: '40', name: '40' },
//   { value: '41', name: '41' },
//   { value: '42', name: '42' },
//   { value: '43', name: '43' },
//   { value: '44', name: '44' },
// ];
// const filterOption2 = [
//   { value: '', name: 'Filter by brand' },
//   { value: '', name: 'All brand' },
//   { value: 'Tom M', name: 'Tom M' },
//   { value: 'Ecco', name: 'Ecco' },
//   { value: 'Clarks', name: 'Clarks' },
// ];
// const filterOption3 = [
//   { value: '', name: 'Filter by price' },
//   { value: '', name: 'All price' },
//   { value: 'less', name: 'Lowest price' },
//   { value: 'more', name: 'Full price' }
// ];



// const FilterPanel = (props) => {
//   const [filteredSize, setFilteredSize] = useState('');
//   const [filteredBrand, setFilteredBrand] = useState('');
//   const [filteredPrice, setFilteredPrice] = useState('');

//   const dropdownChangeSizeHandler = (event) => {
//     setFilteredSize(event.target.value);
//   };

//   const dropdownChangeBrandHandler = (event) => {
//     setFilteredBrand(event.target.value);
//   };

//   const dropdownChangePriceHandler = (event) => {
//     setFilteredPrice(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const itemData = {
//       size: filteredSize,
//       brand: filteredBrand,
//       price: filteredPrice
//     };
//     props.onSaveItemData(itemData);
//   };

//   return (
//     <div className='catalogFilter'>
    
//         <form onSubmit={submitHandler} className='catalogFilter__form'>
//           <div>
//             <Select
//               items={filterOption1}
//               onChange={dropdownChangeSizeHandler}
//             />
//             <Select
//               items={filterOption2}
//               onChange={dropdownChangeBrandHandler}
//             />
//             <Select
//               items={filterOption3}
//               onChange={dropdownChangePriceHandler}
//             />
//           </div>
//           <ApplyBtn type='submit' className='catalogFilter__btn'>
//             Apply
//           </ApplyBtn>
//         </form>
//     </div>
//   );
// };


