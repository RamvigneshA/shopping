import React, { useContext } from 'react';
import { Dropdown } from './dropDown';
import { MyCart } from './myCart';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './App';

export function Navbar() {
  
  const { notification } = useContext(MyContext);
  const history = useNavigate();
  const handleNavigate = () => {
    history("/cart");
  };
  const handleProduct = () => {
    history("/list");
  };
  return (
    <div style={{
      backgroundColor: 'purple',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white',
      alignItems: 'center',
      fontWeight: 600,
      fontSize: '2rem'
    }}>
      <span>Shopping Cart</span>
      <div style={{
        display: 'flex', gap: '40px',
        fontSize: '1.5rem',
        paddingRight: '50px'
      }} >
        <span onClick={() => { handleProduct(); }} ><Dropdown /></span>
        <span onClick={() => { handleNavigate(); }}>My Cart <span style={{ backgroundColor: 'white', color: 'purple', width: '50px' }} >{notification}</span></span>

      </div>
    </div>
  );
}
