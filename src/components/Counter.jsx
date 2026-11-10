import { useEffect, useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log("Räknare visas!")

        return () => {console.log("Räknare tas bort..")}
    },[])

    useEffect(() => {
        console.log("Räknare uppdateras!")
    },[count])

    return(<div>
        <h2>Counter: {count}</h2>
        <button onClick={() => {setCount(count+1)}}>+</button>
    </div>)
}

export default Counter