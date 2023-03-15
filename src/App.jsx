import { useState, useReducer, useContext } from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/cart" element={<ShoppingCart />}></Route>
					<Route path="/product" element={<Product />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
