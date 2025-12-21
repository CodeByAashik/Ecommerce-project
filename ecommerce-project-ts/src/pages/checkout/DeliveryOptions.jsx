import dayjs from "dayjs";
import axios from "axios";
import { useContext } from "react";
import { CartItemsContext } from "../../../context/CartItemsContext";
import { formatMoney } from "../../utils/money";

export function DeliveryOptions({ deliveryOptions, item }) {
	const { loadCart } = useContext(CartItemsContext);
 
	return (
		<div className="delivery-options">
			<div className="delivery-options-title">
				Choose a delivery option:
			</div>
			{deliveryOptions.map((deliveryOption) => {
				let priceString = 'FREE - Shipping';
				if (deliveryOption.priceCents > 0) {
					priceString = `${formatMoney(deliveryOption.priceCents)}`;
				}


				const updateDeliveryOption = async () => {
					await axios.put(`/api/cart-items/${item.productId}`, {
						deliveryOptionId: deliveryOption.id
					})
					loadCart();
				}

				return (
					<div
						key={deliveryOption.id}
						className="delivery-option"
						onClick={updateDeliveryOption}
					>

						<input type="radio"
							checked={deliveryOption.id === item.deliveryOptionId}
							
							className="delivery-option-input"
							name={`delivery-option-${item.productId}`}
						/>

						<div>
							<div className="delivery-option-date">
								{dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
							</div>
							<div
								className="delivery-option-price" >
								{priceString}
							</div>
						</div>
					</div>
				);
			})
			}
		</div>
	);
}