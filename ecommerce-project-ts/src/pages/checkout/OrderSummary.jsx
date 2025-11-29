import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from './CartItemDetails';
import { DeliveryDate } from './DeliveryDate';

export function OrderSummary({deliveryOptions, cartItems, loadCart, getPaymentSummaryData}) {
	return (
		<div className="order-summary">
			{deliveryOptions.length > 0 && cartItems.map((item) => {

				
				return (
					<div key={item.product.id} className="cart-item-container">
						<DeliveryDate deliveryOptions={deliveryOptions} item={item} />

						<div className="cart-item-details-grid">
							<CartItemDetails item={item} loadCart={loadCart}/>
							<DeliveryOptions deliveryOptions={deliveryOptions} item={item} loadCart={loadCart} getPaymentSummaryData={getPaymentSummaryData}/>
						</div>
					</div>
				);
			})}
		</div>
	);
}