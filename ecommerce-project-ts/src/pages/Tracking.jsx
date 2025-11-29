import './Tracking.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Header } from '../components/Header';
import { Link, useParams } from 'react-router';

export function Tracking({cartItems}) {
	const { orderId, productId } = useParams();
	const [ order, setOrder ] = useState(null);	
	
	useEffect(() => {
		const loadCart = async () => {
			const response = await axios.get(`/api/orders/${orderId}?expand=products`);
			setOrder(response.data);
		};

		loadCart();
	}, [orderId]);

	const matchingOrders = order?.products.find((prod) => {
		return prod.productId === productId;
	})
	if(!order){
		return null;
	}
	const totalDeliveryTimeMs = matchingOrders.estimatedDeliveryTimeMs - order?.orderTimeMs;
	const timePassedMs = totalDeliveryTimeMs*0.3;
	const remainingDeliveryTimePercentage = (timePassedMs / totalDeliveryTimeMs) * 100;
	
	const isPrepararing = remainingDeliveryTimePercentage<33;
	const isShipped = (remainingDeliveryTimePercentage >= 33 && remainingDeliveryTimePercentage < 100);
	const isDelivered = (remainingDeliveryTimePercentage === 100);
	
	return (
		<>
			<Header cartItems={cartItems}/>
			<link rel="icon" href="tracking-favicon.png" />
			<title>Track Package</title>
			<div className="tracking-page">
				<div className="order-tracking">
					<Link className="back-to-orders-link link-primary" to="/orders">
						View all orders
					</Link>

					<div className="delivery-date">
						{remainingDeliveryTimePercentage >= 100 ? "Deliered on: " : "Arriving on: "} {dayjs(matchingOrders.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
					</div>

					<div className="product-info">
						{matchingOrders.product.name}
					</div>

					<div className="product-info">
						Quantity: {matchingOrders.quantity}
					</div>

					<img className="product-image" src={matchingOrders.product.image} />

					<div className="progress-labels-container">
						<div className={`progress-label ${isPrepararing && 'current-status'}`}>
							Preparing
						</div>
						<div className={`progress-label ${isShipped && 'current-status'}`}>
							Shipped
						</div>
						<div className={`progress-label ${isDelivered && 'current-status'}`}>
							Delivered
						</div>
					</div>

					<div className="progress-bar-container">
						<div className="progress-bar" style={{width: `${remainingDeliveryTimePercentage}%`}}></div>
					</div>
				</div>
			</div>
		</>
	);
}