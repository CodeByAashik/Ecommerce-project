import { Link } from "react-router";
import { Header } from "../components/Header";
import './NotFound.css'

export function NotFound() {
	return (
		<>
			<Header />
			<div className="error-box">
				<p className="error-message">404 Page not found</p>
				<Link to="/">Go back to home</Link>
			</div>
		</>
	)
}