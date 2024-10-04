import React, { useContext, useState } from 'react';
import './productview.css';
import { MyContext } from './App';


export function ProductViewPage() {
  const { productDatas, cart, setMyCart ,selected ,setNotify} = useContext(MyContext);
  const [bigImage, setBigImage] = useState(0);
  let id = selected - 1;
  console.log('memeem:',cart);
  return (
    <div className="productViewPage">
      <h1 className="header">{productDatas[id].title}</h1>
      <div className="hoverImgContainer">
        {productDatas[id].images.map((image, index) => {
          return (
            <div onClick={() => setBigImage(index)}>
              <img src={image} alt="hii" style={{ width: 100 }} />
            </div>
          );
        })}
      </div>
      <div className="bigImage">
        <img src={productDatas[id].images[bigImage]} alt="" />
      </div>
      <div className="details">
        <h2>{productDatas[id].description}</h2>
        <br />
        <h3>Rating:{productDatas[id].rating}</h3>
        <h2>
          Price:
          <span className="amount">
            {Math.round(productDatas[id].price) * 10}
          </span>
          ₹
        </h2>
        <p>{productDatas[id].warrantyInformation}</p>
        <p>{productDatas[id].shippingInformation}</p>
        <button
          onClick={() => {
             let newArray = [];
            newArray = [...cart];
            newArray.push((id + 1))
            setMyCart(newArray)
            setNotify(newArray.length)
          }}
        >Add to Cart</button>
      </div>
      <div className='comments'>
        <h2>Comments</h2>
        {productDatas[id].reviews.map((review) => {
          return( 
          <div>
              <h4>{review.reviewerName} </h4>
              <p>{review.comment}</p>
              <hr />
          </div>)
        })}
      </div>
    </div>
  );
}
