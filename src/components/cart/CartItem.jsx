import React from 'react';

function CartItem({ dispatch, product: { id, name, image, price, qty, inStock } }) {
	function plusHandler() {
		if (qty < inStock) {
			dispatch({ type: 'UPDATE_QTY', payload: { id: id, qty: qty + 1 } });
		}
	}
	function minusHandler() {
		if (qty > 1) {
			dispatch({ type: 'UPDATE_QTY', payload: { id: id, qty: qty - 1 } });
		} else if (qty === 1) {
			dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
		}
	}
	function removeHandler() {
		dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
	}
	return (
		<li className="cart-item">
			<img className="cart-item__image" src={image} alt={name} />
			<div className="cart-item__info-wrapper">
				<h3 className="cart-item__name">{name}</h3>
				<div className="cart-item__data-box">
					<span className="cart-item__label">Price per unit:</span>
					<span className="cart-item__data">${price}</span>
				</div>

				<div className="cart-item__data-box">
					<span className="cart-item__label">Total:</span>
					<span className="cart-item__data">${(price * qty).toFixed(2)}</span>
				</div>
				<div className="cart-item__data-box">
					<span className="cart-item__label ">In stock:</span>
					<span className="cart-item__data cart-item__data--in-stock ">{inStock}</span>
				</div>
				<div className="qty-input">
					<button className="qty-input__btn" onClick={minusHandler}>
						-
					</button>
					<span className="qty-input__value">{qty}</span>
					<button className="qty-input__btn" onClick={plusHandler}>
						+
					</button>
				</div>
			</div>
			<button className="cart-item__remove-btn" onClick={removeHandler}>
				Remove
			</button>
		</li>
	);
}

export default CartItem;
