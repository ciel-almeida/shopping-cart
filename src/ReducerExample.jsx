import { useState, useReducer } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const initState = {
	firstCounter: 0,
};

function reducer(state, action) {
	switch (action) {
		case 'INCREMENT':
			return { firstCounter: state.firstCounter + 1 };
		case 'DECREMENT':
			return { firstCounter: state.firstCounter - 1 };
		case 'RESET':
			return { firstCounter: 0 };
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initState);
	// const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React - Counter is {state.firstCounter}</h1>
			<div className="card">
				<button onClick={() => dispatch('INCREMENT')}>Increment</button>
				<button onClick={() => dispatch('DECREMENT')}>Decrement</button>
				<button onClick={() => dispatch('RESET')}>Reset</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;
