import { PRODUCTS } from '../data/data';

export const shopInitialState = {
	products: PRODUCTS,
	cart: [],
};

export function shopReducer(state, action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			const productToBeAddedID = action.payload.id;
			const teste = state.cart.filter(prod => prod.id === productToBeAddedID);
			if (teste.length) {
				const newQty = teste[0].qty + 1;
				const cartItems = state.cart.map(prod => {
					if (prod.id === productToBeAddedID) {
						return { ...prod, qty: newQty };
					}
					return prod;
				});
				return { ...state, cart: [...cartItems] };
			}
			return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
		case 'REMOVE_FROM_CART':
			return { ...state, cart: [...state.cart.filter(item => item.id != action.payload.id)] };
		case 'UPDATE_QTY':
			const newCart = state.cart.map(item => {
				if (item.id === action.payload.id) {
					return { ...item, qty: action.payload.qty };
				}
				return item;
			});
			return { ...state, cart: [...newCart] };
		default:
			return state;
	}
}
