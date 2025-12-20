import { Routes, Route } from 'react-router'
import CartItemsProvider from '../context/CartItemsProvider'

import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { Tracking } from './pages/Tracking'
import { NotFound } from './pages/NotFound'
import './App.css'

function App() {
  return (
    <CartItemsProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking/:orderId/:productId" element={<Tracking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartItemsProvider>
  )
}
export default App;