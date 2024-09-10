import { useEffect, useState } from "react";
import axios from "axios";

export function useTodo(n) {
	const [todos, setTodos] = useState([]);
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		setInterval(() => {
			axios.get("https://dummyjson.com/todos").then((res) => {
				setTodos(res.data.todos);
				setLoading(false);
			} );
		},n * 1000);
	}, [n]);

	return { todos, Loading };
}
