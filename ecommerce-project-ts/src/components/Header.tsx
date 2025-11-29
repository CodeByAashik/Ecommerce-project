import './Header.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import logoWhite from "../assets/images/ecommerce-logo.png";
import mobileLogoWhite from "../assets/images/ecommerce-logo.png";
import searchIcon from "../assets/images/icons/search-icon.png";
import cartIcon from "../assets/images/icons/cart-icon.png";
import { NavLink } from 'react-router'

type HeaderProps = {
    cartItems: {
        productId: string,
        quantity: number,
        deliveryOptionId: string
    }[];
}

export function Header({ cartItems }: HeaderProps) {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const performSearch = () => {
        console.log(searchInput);
        navigate(`/?search=${searchInput}`);
        setSearchInput("");
    }
    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo"
                        src={logoWhite} />
                    <img className="mobile-logo"
                        src={mobileLogoWhite} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input
                    className="search-bar"
                    type="text" placeholder="Search"
                    onChange={(e) => { setSearchInput(e.target.value) }}
                    value={searchInput}
                    onKeyDown={(e) => { if (e.key === 'Enter') performSearch() }}
                />

                <button className="search-button" onClick={performSearch}>
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">
                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    );
}