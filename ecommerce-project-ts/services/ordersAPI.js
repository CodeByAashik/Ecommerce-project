import axios from 'axios';

export const loadCart = async (orderId, setOrder) => {
    const response = await axios.get(`/api/orders/${orderId}?expand=products`);
    setOrder(response.data);
};    