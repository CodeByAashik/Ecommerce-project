import { useEffect, useState, Fragment } from "react";
import { Header } from "../components/Header";

import './OrdersPage.css'
import axios from "axios";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cartItems, loadCart }) {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const getOrdersData = async () => {
			const response = await axios.get('/api/orders?expand=products');
			setOrders(response.data);
		}
		getOrdersData();
	}, []);
	return (
		<>
			<Header cartItems={cartItems} />
			<title>Orders</title>
			<link rel="icon" href="orders-favicon.png" />
			<div className="orders-page">
				<div className="page-title">Your Orders</div>
				<OrdersGrid orders={orders} loadCart={loadCart} />
			</div>
		</>
	);
}