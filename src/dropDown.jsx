import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from './App';

export function Dropdown() {
  function filterUniqueElements(elementsArray) {
    const uniqueElements = [];

    for (const element of elementsArray) {
      if (!uniqueElements.includes(element)) {
        uniqueElements.push(element);
      }
    }

    return uniqueElements;
  }
  const [show, setShow] = useState(false);

  const { productDatas, requiredCategory, setRequiredCategory } =
    useContext(MyContext);
  const productCategory = [];
  productDatas.forEach((element) => {
    productCategory.push(element.category);
  });

  const uniqueProductCategory = filterUniqueElements(productCategory);

  return (
    <div
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div style={{ position: 'relative' }}>Product Category</div>
      {show ? (
        <div
          style={{
            position: 'absolute',
            color: 'purple',
            backgroundColor: '#E6E6FA',
            width: '200px',
            textAlign: 'center',
          }}
        >
          {uniqueProductCategory.map((uniqueElements, index) => {
            return (
              <div
                className="dropdownElements"
                key={index}
                style={{
                  padding: 10,
                }}
                onClick={() => {
                  setRequiredCategory(uniqueElements);
                }}
              >
                {uniqueElements}
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
