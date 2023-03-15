import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function CartIcon({ cartState }) {
	return (
		<Link to={'/cart'}>
			<div className="cart-icon">
				<AiOutlineShoppingCart />
				<span className="cart-icon__counter">{cartState.length}</span>
			</div>
		</Link>
	);
}

export default CartIcon;
