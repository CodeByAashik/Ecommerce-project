import React from 'react'
import { CartItemsContext } from './CartItemsContext'

const CartData = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCartItems(response.data);
  };

  return (
    <CartItemsContext.Provider value={{ cartItems, loadCart }}>
      {children}
    </CartItemsContext.Provider>
  )
}

export default CartData
