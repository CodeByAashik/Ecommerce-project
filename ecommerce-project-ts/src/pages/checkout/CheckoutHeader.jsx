import './CheckoutHeader.css'
import logo from '../../assets/images/ecommerce-logo.png'
import checkoutLockIcon from '../../assets/images/icons/checkout-lock-icon.png'

export function CheckoutHeader({cartItems}){
    return(
        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                <a href="/">
                    <img className="logo" src={logo} />
                    <img className="mobile-logo" src="images/mobile-logo.png" />
                </a>
                </div>

                <div className="checkout-header-middle-section">
                Checkout (<a className="return-to-home-link"
                    href="index.html">{cartItems.reduce((sum,item) => sum+item.quantity,0)} items</a>)
                </div>

                <div className="checkout-header-right-section">
                <img src={checkoutLockIcon} />
                </div>
            </div>
        </div>
    );
}