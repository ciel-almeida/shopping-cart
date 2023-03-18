import React from 'react';
import { ShopState } from '../../contexts/shop-context';
import { AiOutlineArrowRight } from 'react-icons/ai';

function CartSummary() {
	const {
		state: { cart },
	} = ShopState();

	const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
	const qtyInCart = cart.reduce((sum, item) => sum + item.qty, 0);

	return (
		<>
			{cart.length ? (
				<div className="cart-summary">
					<h2>Summary</h2>
					<p className="cart-summary__item">
						Items: <b>{qtyInCart}</b>
					</p>
					<p className="cart-summary__item">
						Total: <b>$ {totalPrice.toFixed(2)}</b>
					</p>
					<button className="cart-summary__btn">
						Payment <AiOutlineArrowRight />
					</button>
				</div>
			) : (
				''
			)}
		</>
	);
}

export default CartSummary;
