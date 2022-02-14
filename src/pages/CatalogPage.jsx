import React, { useState } from 'react';

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
        console.log(selectPrice);

        break;
      case 'highest':
        setProductItem(productItems.sort((a, b) => b.price - a.price));

        break;

      default:
        setProductItem(data.productItems);
        break;
    }
  };

  const sex = e => {
    const selectSex = e.target.value;
    console.log(selectSex);
    switch (selectSex) {
      case 'men':
        setProductItem(
          data.productItems.filter(product => product.sex === 'men'),
        );

        break;
      case 'women':
        setProductItem(
          data.productItems.filter(product => product.sex === 'women'),
        );
        console.log(productItems);
        break;

      default:
        setProductItem(data.productItems);
        break;
    }
  };
  return (
    <div>
      <FilterPanel alphabet={alphabet} price={price} sex={sex} />
      <Products data={productItems} />
    </div>
  );
}
