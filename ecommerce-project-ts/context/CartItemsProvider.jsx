import { useState, useEffect, useCallback, useMemo } from 'react';
import { CartItemsContext } from './CartItemsContext';
import { getCartItems } from '../services/cartAPI';

const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCart = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getCartItems();
      setCartItems(res);
      console.log('Cart items loaded:', res);
    } catch (err) {
      setError(err);
      console.error('Failed to fetch cart items', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const value = useMemo(() => ({
    cartItems,
    loading,
    error,
    loadCart,
    setCartItems,
  }), [cartItems, loading, error, loadCart]);

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsProvider;
