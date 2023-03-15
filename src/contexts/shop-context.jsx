import React, { createContext, useContext, useReducer } from 'react';
import { shopReducer, shopInitialState } from '../reducers/shopReducer';

// 01 - Creating the context
const ShopContext = createContext({});

// 02 - Provider to wrapp the application and share the context
export function ShopProvider({ children }) {
	const [state, dispatch] = useReducer(shopReducer, shopInitialState);
	// const [teste, setTeste] = useState(1999);
	console.log(state);
	return <ShopContext.Provider value={{ state, dispatch }}>{children}</ShopContext.Provider>;
}

// 03 - Function to have access to the context without importing ShopContext and the useContext hook
export function ShopState() {
	return useContext(ShopContext);
}
