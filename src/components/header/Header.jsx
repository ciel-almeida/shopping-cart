import React from 'react';
import { ShopState } from '../../contexts/shop-context';
import CartIcon from './CartIcon';
import Logo from './Logo';
import SearchBar from './SearchBar';
import './styles.css';

function Header() {
	const {
		state: { cart },
	} = ShopState();

	const qtyInCart = cart.reduce((sum, item) => sum + item.qty, 0);

	return (
		<div className="wrapper">
			<header className="main-header">
				<Logo />
				{/* <h1 className="main-header__title">A maior loja de livros do brazil</h1> */}
				{/* <SearchBar /> */}
				<CartIcon qtyInCart={qtyInCart} />
			</header>
		</div>
	);
}

export default Header;
