import { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import TodoList from './components/TodoList';
function App() {

  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos");
      let json = await res.json();
      setTodos(json)
    }

    getData();
  }, [])

  return (
    <>
      <h1 onClick={() => {setShow(!show)}}>React med API</h1>
      {/* Counter-komponenten använder useEffect */}
      {show && <Counter />}

    {/* {TodoList-komponenten visar API-anrop vid klick */}
      <TodoList/>
    </>
  )
}

export default App
