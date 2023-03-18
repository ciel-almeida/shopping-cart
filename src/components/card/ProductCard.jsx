import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './style.css';

function ProductCard({ product: { id, name, image, price, rating, inStock }, product, dispatch }) {
	function addToCartHandler() {
		if (!inStock) return;
		dispatch({ type: 'ADD_TO_CART', payload: product });
	}
	return (
		<div className="prod-card">
			<img src={image} alt="" className="prod-card__image" />

			<h3 className="prod-card__title">{name}</h3>
			<div className="prod-card__info-wrapper">
				<p className="prod-card__price">Price: $ {price}</p>
				<p className={inStock ? 'prod-card__stock' : 'prod-card__stock prod-card__stock--out'}>
					{inStock ? inStock + ' in Stock' : 'Out of Stock'}
				</p>
			</div>

			<span className="prod-card__rating">
				{rating}
				<AiOutlineStar />
			</span>
			<div className="prod-card__btn-wrapper">
				<button className="prod-card__btn">Details</button>
				<button
					className={
						inStock
							? 'prod-card__btn prod-card__btn--buy'
							: 'prod-card__btn prod-card__btn--unavailable'
					}
					onClick={addToCartHandler}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
