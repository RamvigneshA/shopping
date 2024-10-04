import React, { useContext, useState } from 'react';
import { ItemCard } from './itemCard';
import { MyContext } from './App';

export function ShoppingList() {
  const { productDatas, requiredCategory } = useContext(MyContext);

  return (
    <div className="shoppingList">
      {productDatas.map((singleProduct) => {
        if (singleProduct.category === requiredCategory) {
          return <ItemCard key={singleProduct.id} product={singleProduct} />;
        }
      })}
    </div>
  );
}
