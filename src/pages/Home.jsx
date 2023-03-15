import React from 'react';
import ProductCard from '../components/card/ProductCard';
import './Home.css';

import { ShopState } from '../contexts/shop-context';

function Home() {
	const {
		state: { products },
		dispatch,
	} = ShopState();
	console.log(products);
	return (
		<main class="home">
			{products.map(prod => (
				<ProductCard product={prod} dispatch={dispatch} />
			))}
		</main>
	);
}

export default Home;
