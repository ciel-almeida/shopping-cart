import { PRODUCTS } from '../data/data';

export const shopInitialState = {
	products: PRODUCTS,
	cart: [],
};

export function shopReducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
		case 'REMOVE_FROM_CART':
			return { firstCounter: state.firstCounter - 1 };
		case 'UPDATE_QTY':
			return { firstCounter: 0 };
		default:
			return state;
	}
}
