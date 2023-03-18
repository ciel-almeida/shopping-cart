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
		<div className="home-wrapper">
			<h1 className="page-main__title">Products</h1>
			{products.length ? '' : <h3 className="page-main__sub-title">EMPTY</h3>}
			<main className="home">
				{products.map(prod => (
					<ProductCard key={prod.id} product={prod} dispatch={dispatch} />
				))}
			</main>
		</div>
	);
}

export default Home;
