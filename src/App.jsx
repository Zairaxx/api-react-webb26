import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Counter from './components/Counter'
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
      {show && <Counter />}

      {todos.map(todo => <li>{todo.title}</li>)}
    </>
  )
}

export default App
