import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './navBar';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';
export const MyContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [requiredCategory, setRequiredCategory] = useState('furniture');
  const [cart, setMyCart] = useState([]);
  const [selected, setSelected] = useState(null);
  const [notification, setNotify] = useState(null);

  const contextValue = {
    productDatas: products,
    requiredCategory: requiredCategory,
    setRequiredCategory: setRequiredCategory,
    cart: cart,
    setMyCart: setMyCart,
    selected: selected,
    setSelected: setSelected,
    notification: notification,
    setNotify,
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <p>Error fetching Products: {error.message}</p>;
  }

  return (
    <>
      <MyContext.Provider value={contextValue}>
        <Navbar />
        <Outlet />
      </MyContext.Provider>
    </>
  );
}

export default App;
