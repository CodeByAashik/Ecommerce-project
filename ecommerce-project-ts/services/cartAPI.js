import axios from 'axios';

export const getCartItems = () => {
    axios.get('/api/cart-items?expand=product');
    console.log("getCartItems called");
}