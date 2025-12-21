import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from './CartItemDetails';
import { DeliveryDate } from './DeliveryDate';
import { useContext } from "react";
import { CartItemsContext } from "../../../context/CartItemsContext";

export function OrderSummary({deliveryOptions, getPaymentSummaryData}) {
	const {cartItems} = useContext(CartItemsContext);
	
	return (
		<div className="order-summary">
			{deliveryOptions.length > 0 && cartItems.map((item) => {

				
				return (
					<div key={item.product.id} className="cart-item-container">
						<DeliveryDate deliveryOptions={deliveryOptions} item={item} />

						<div className="cart-item-details-grid">
							<CartItemDetails item={item} />
							<DeliveryOptions deliveryOptions={deliveryOptions} item={item} getPaymentSummaryData={getPaymentSummaryData}/>
						</div>
					</div>
				);
			})}
		</div>
	);
}