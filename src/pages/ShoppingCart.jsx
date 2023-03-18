import React from 'react';
import './ShoppingCart.css';
import CartList from '../components/cart/CartList';
import { ShopState } from '../contexts/shop-context';
import CartSummary from '../components/cart/CartSummary';

function ShoppingCart() {
	const {
		state: { cart },
	} = ShopState();
	return (
		<main className="shopping-cart">
			<h1 className="page-main__title">Shopping Cart</h1>
			{cart.length ? '' : <h3 className="page-main__sub-title">EMPTY</h3>}
			<CartList />
			<CartSummary />
		</main>
	);
}

export default ShoppingCart;
