import React, { useState } from 'react';

import s from './MainPage.module.css';
import items from './items';

export default function MainPageItems() {
  const [viewMore, setViewMore] = useState(false);

  const handleItemsCut = i => {
    if (!viewMore) {
      const cuttedItems = items.slice(0, 3);
      return cuttedItems;
    }
    return items;
  };
  const viewItems = handleItemsCut(items);
  return (
    <div>
      <ul className={s.MainPage__catalog}>
        {viewItems.map(item => (
          <li key={item.id} className={s.MainPage__list}>
            <img className={s.MainPage_img} src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p className={s.MainPage__text}>{item.description}</p>
          </li>
        ))}
      </ul>
      <button
        className={s.MainPage__button}
        type="button"
        onClick={e => setViewMore(!viewMore)}
      >
        {viewMore ? 'View less' : 'View more'}
      </button>
    </div>
  );
}
