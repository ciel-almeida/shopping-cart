import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ShopProvider } from './contexts/shop-context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ShopProvider>
			<App />
		</ShopProvider>
	</React.StrictMode>
);
