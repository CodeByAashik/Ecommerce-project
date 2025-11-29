import axios from 'axios';
import { useState, useEffect } from 'react';
import './CheckoutPage.css'
import { CheckoutHeader } from './CheckoutHeader';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cartItems, loadCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState({
        totalItems: 0,
        productCostCents: 0,
        shippingCostCents: 0,
        totalCostBeforeTaxCents: 0,
        taxCents: 0,
        totalCostCents: 0
    });
    useEffect(() => {
        const getDeliveryOptionData = async () => {
            const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data);

        }
        getDeliveryOptionData();


    }, []);

    useEffect(() => {
        const getPaymentSummaryData = async () => {
            const response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data);
        }
        getPaymentSummaryData();
    }, [cartItems])

    return (
        <>
            <title>Checkout</title>
            <link rel="icon" href="cart-favicon.png" />


            <CheckoutHeader cartItems={cartItems} />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>
                <div className="checkout-grid">
                    <OrderSummary deliveryOptions={deliveryOptions} cartItems={cartItems} loadCart={loadCart} />

                    <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart }/>
                </div>
            </div>
        </>
    );
}