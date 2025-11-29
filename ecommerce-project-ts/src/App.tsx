import { Routes, Route } from 'react-router'
import { useEffect, useState} from 'react'
import axios from 'axios'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { Tracking } from './pages/Tracking'
import { NotFound } from './pages/NotFound'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);


const loadCart = async () => {
  const response = await axios.get('/api/cart-items?expand=product');
  setCartItems(response.data);
};



  useEffect(() => {
     loadCart();
  }, []);



  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cartItems={cartItems} loadCart={loadCart} />} />
        <Route path="checkout" element={<CheckoutPage cartItems={cartItems} loadCart={loadCart}/>} />
        <Route path="orders" element={<OrdersPage cartItems={cartItems} loadCart={loadCart}/>} />
        <Route path="tracking/:orderId/:productId" element={<Tracking cartItems={cartItems} />} />
        <Route path="*" element={<NotFound cartItems={cartItems}/>} />
      </Routes>
    </>
  )
}

export default App;