import axios from 'axios'
import { useState } from 'react';
import { formatMoney } from "../../utils/money";
export function CartItemDetails({ item, loadCart }) {
    const [isBeingUpdated, setIsBeingUpdated] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity);
    async function updateQuantity() {
        if(!isBeingUpdated){
            setIsBeingUpdated(true);
            return;
        }
        await axios.put(`/api/cart-items/${item.productId}`,{
            quantity
        })
        await loadCart();
        setIsBeingUpdated(false);
    }

    const keyEvent = (e) => {
        if(e.key === 'Enter') updateQuantity();
        else if (e.key === 'Escape') setIsBeingUpdated(false);
        }


    const deleteItem = async () => {
        await axios.delete(`/api/cart-items/${item.productId}`);
        await loadCart();
    }
    return (
        <>
            <img className="product-image"
                src={item.product.image} />

            <div className="cart-item-details">
                <div className="product-name">
                    {item.product.name}
                </div>
                <div className="product-price">
                    {formatMoney(item.product.priceCents)} 
                </div>
                <div className="product-quantity">
                    {
                        isBeingUpdated &&
                        (<input
                            type="text"
                            style={{ width: isBeingUpdated ? "30px" : "0px" }}
                            onChange={(e) => { setQuantity(Number(e.target.value)) }}
                            value={quantity}
                            onKeyDown={keyEvent} 
                        />)
                    }

                    <span>
                        Quantity: <span className="quantity-label">{item.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary" onClick={updateQuantity}>
                        Update
                    </span>
                    <span className="delete-quantity-link link-primary" onClick={deleteItem}>
                        Delete
                    </span>
                </div>
            </div>
        </>
    );
}