import React, { useContext } from 'react'
import { MyContext } from './App'

export function MyCart() {
  const { productDatas, cart, setMyCart } = useContext(MyContext);
 




const productQuantities = new Map();
for (const id of cart) {
  productQuantities.set(id, (productQuantities.get(id) || 0) + 1);
}

const filteredProducts = productDatas.filter(product => productQuantities.has(product.id))
  .map(product => ({ ...product, quantity: productQuantities.get(product.id) }));
   
  let sum=0;
  filteredProducts.forEach((ele) => {
    sum+=(Math.round(ele.price) * 10)*ele.quantity
  })

  return (
    <div>
      {
        filteredProducts.map((each) => {
          return (
            <div  className="product-card">
      <img src={each.images[0]}  className="product-image" />
      <div className="product-details">
        <h3>{each.title }</h3>
        <p>Price per unit: {(Math.round(each.price) * 10)}₹</p>
                <p>quantity:{each.quantity}</p>
                <h4>TOTAL:{(Math.round(each.price) * 10)*each.quantity}₹</h4>
                
      </div>
    </div>
         )
        })
      }
      <h1>Total:{sum }₹</h1>

    </div>
  )
}
