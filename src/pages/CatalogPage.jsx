import React, { useState, useEffect } from 'react';

import FilterPanel from 'components/FilterPanel/FilterPanel';
import Products from 'components/Products/Products';
import data from 'components/Products/Data';

export default function CatalogPage() {
  const [productItems, setProductItem] = useState(data.productItems);

  const alphabet = e => {
    const selectName = e.target.value;

    switch (selectName) {
      case 'alpha':
        setProductItem(
          productItems.sort((a, b) => a.title.localeCompare(b.title)),
        );

        break;
      case 'zero':
        setProductItem(
          productItems.sort((a, b) => b.title.localeCompare(a.title)),
          console.log(productItems),
        );
        break;

      default:
        setProductItem(data.productItems);
        break;
    }
  };

  const price = e => {
    const selectPrice = e.target.value;

    switch (selectPrice) {
      case 'lowest':
        setProductItem(productItems.sort((a, b) => a.price - b.price));

        break;
      case 'highest':
        setProductItem(
          productItems.sort((a, b) => b.price - a.price),
          console.log(productItems),
        );
        break;

      default:
        setProductItem(data.productItems);
        break;
    }
  };
  useEffect(() => {
    console.log(productItems);
  }, [alphabet]);
  return (
    <div>
      <FilterPanel alphabet={alphabet} price={price} />
      <Products data={productItems} />
    </div>
  );
}
