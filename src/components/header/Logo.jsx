import React from 'react';
import { GiEvilBook } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<Link to={'/'}>
			<a className="logo">
				<GiEvilBook color={'inherit'} />
				<span className="logo__name">Bookpress</span>
			</a>
		</Link>
	);
}

export default Logo;
