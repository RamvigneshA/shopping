import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ShoppingList } from './shoppingList';
import { ProductViewPage } from './productViewPage.jsx';
import { MyCart } from './myCart.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Navigate to="/list" />} />
      <Route path="list" element={<ShoppingList />} />
      <Route path="productdetails" element={<ProductViewPage />} />
      <Route path="cart" element={<MyCart />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
);
