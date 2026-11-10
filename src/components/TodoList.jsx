import { useState } from "react"

function TodoList() {

    const [todos,setTodos] = useState([]);

    const getTodos = async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let json = await res.json();
        setTodos(json);
    }

    return (<>
    <button onClick={getTodos}>Hämta todos</button>
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul></>)
}

export default TodoList