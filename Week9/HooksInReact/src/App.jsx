import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseEffectComp from "./Usefeect";
import Todos from "./todos";
import { useIsOnline } from "./useOnline";
import { useMousePointer } from "./mousepointer";
import { useInterval } from "./useInterval";


function App() {

	const [count, setCount] = useState(0);	
	const isOnline = useIsOnline(5)
	const mousePointer = useMousePointer();

	useInterval(() => setCount((c) => c + 1), 1000); 



	return (
		<>
			<MyComponent />
			<MyComp />
			<br />
			<br />
			<Todos />
			<UseEffectComp />

			<br /><br />
			<>
      		{isOnline ? "You are online yay!" : "You are not online"}
    		</>

			<><br /><br />
      		Your mouse position is {mousePointer.x} {mousePointer.y}
    		</>

			<br />
			<br />
			<>
      Timer is at {count}
    </>
			<br />
		</>
	);
}

function MyComponent() {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>{count}</p>
			<button onClick={incrementCount}>Increment</button>
		</div>
	);
}
class MyComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	incrementCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div>
				<p>{this.state.count}</p>
				<button onClick={this.incrementCount}>Increment</button>
			</div>
		);
	}
}

//   useEffect

export default App;
