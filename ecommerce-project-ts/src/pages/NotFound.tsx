import { Link } from "react-router";
import { Header } from "../components/Header";
import './NotFound.css'
type NotFoundProp = {
    cartItems: {
        productId: string,
        quantity: number,
        deliveryOptionId: string
    }[];
}

export function NotFound({cartItems}: NotFoundProp) {
    return(
        <>
            <Header cartItems={cartItems}/>
            <div className="error-box">
                <p className="error-message">404 Page not found</p>
                <Link to="/">Go back to home</Link>
            </div>
        </>
    )
}