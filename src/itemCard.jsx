import React, { useContext } from 'react';
import './card.css'
import { useNavigate } from 'react-router-dom';
import { MyContext } from './App';



export function ItemCard(props) {
  const{selected,setSelected}=useContext(MyContext)
  const history = useNavigate();
  const handleNavigate = () => {
    setSelected(props.product.id);
    history("/productdetails");
  }

  return (
    <div  className="product-card"
      onClick={() => {
        handleNavigate()
      }}
      style={{cursor:'pointer'}}
    >
      <img src={props.product.images[0]}  className="product-image" />
      <div className="product-details">
        <h3>{props.product.title }</h3>
        <p>Price: {(Math.round(props.product.price) * 10)}₹</p>
      </div>
    </div>
  );
}
 