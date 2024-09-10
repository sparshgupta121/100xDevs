import React, { useEffect, useState } from "react";
import "./App.css";

function UseEffectComp() {
	const [render, setRender] = useState(true);

	useEffect(() => {
		setInterval(() => {
			setRender((r) => !r);
		}, 5000);
	}, []);

	return (
		<>
			{render ? <MyComponent /> : <div></div>}
			<MyComp />
		</>
	);
}

function MyComponent() {
	useEffect(() => {
		console.error("component mounted");

		return () => {
			console.log("component unmounted");
		};
	}, []);

	return <div>From inside my component</div>;
}

class MyComp extends React.Component {
	componentDidMount() {
		// Perform setup or data fetching here
	}

	componentWillUnmount() {
		// Clean up (e.g., remove event listeners or cancel subscriptions)
	}

	render() {
		// Render UI
	}
}

export default UseEffectComp;
