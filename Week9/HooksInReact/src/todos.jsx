import { useTodo } from "./useTodoHook";

function Todos() {
	const {todos,Loading} = useTodo(5);

	if(Loading){
		return<>Loading .....</>
	}
	return (
		<>
			{todos.map((todo) => (
				<Track todo={todo} />
			))}
		</>
	);
}

function Track({ todo }) {
	return (
		<div>
			{todo.id}
			<br />
			{todo.todo}
			<br />
			{todo.completed}
		</div>
	);
}

export default Todos;
