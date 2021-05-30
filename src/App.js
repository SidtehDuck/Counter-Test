import React, {useState} from "react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Button from "./Components/Button";
import DisplayCount from "./Components/DisplayCount";
import counterReducer from './Actions/Reducer';

const store = createStore(counterReducer);

function App() {

	const [count, setCount] = useState(0)
  
	console.log(count)

	return (
		<Provider store={store}>
		<div style={{display: 'flex', flexDirection: 'row'}}>

			<div style={{
					width: '50%',
					top: '50%',
					height: '100vh',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Button count={count} incrementCount={setCount}/>
			</div>

			<div style={{
					width: '50%',
					height: '100vh',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<DisplayCount count={count}/>
			</div>

		</div>	
		</Provider>
	);
  }

export default App;
