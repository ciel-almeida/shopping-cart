import React from 'react';
import { ShopState } from '../../contexts/shop-context';
import './style.css';
import CartItem from './CartItem';

function CartList() {
	const {
		state: { cart },
		dispatch,
	} = ShopState();
	return (
		<ul className="cart-list">
			{cart.map(prod => (
				<CartItem key={prod.id} product={prod} dispatch={dispatch} />
			))}
		</ul>
	);
}

export default CartList;
