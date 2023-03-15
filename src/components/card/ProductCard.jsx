import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './style.css';

function ProductCard({ product: { id, name, image, price, rating }, product, dispatch }) {
	return (
		<div className="prod-card">
			<img src={image} alt="" className="prod-card__image" />
			<h3 className="prod-card__title">{name}</h3>
			<p className="prod-card__price">$ {price}</p>
			<span className="prod-card__rating">
				{rating}
				<AiOutlineStar />
			</span>
			<div className="prod-card__btn-wrapper">
				<button
					className="prod-card__btn"
					onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
				>
					Add to Card
				</button>
				<button className="prod-card__btn prod-card__btn--buy">Buy now</button>
			</div>
		</div>
	);
}

export default ProductCard;
