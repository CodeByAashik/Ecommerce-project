import { useSearchParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ProductContainer } from "./ProductContainer"
import { Header } from "../../../../ecommerce-project-ts/src/components/Header"
import './HomePage.css'

export function HomePage({ cartItems, loadCart }) {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const search = searchParams.get('search');
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProductsData = async () => {
			if (search) {
				const response = await axios.get(`/api/products/?search=${search}`);
				setProducts(response.data);
			}else{
				const response = await axios.get(`/api/products`);
				setProducts(response.data);
			}
		};
		fetchProductsData();
	}, [search]);


	return (
		<>
			<title>Ecommerce Website</title>
			<link rel="icon" href="home-favicon.png" />

			<div className="home-page">
				<Header cartItems={cartItems} />
				<ProductContainer products={products} loadCart={loadCart} />
			</div>
		</>
	)
}