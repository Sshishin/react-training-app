import { useState } from 'react';


function Counter() {
    const [state, setState] = useState(2)
    const [value, setValue] = useState('Двустороннее связывание')

    function increment() {
        setState(state + 1)
    }

    function decrement() {
        setState(state - 1)
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h2>{value}</h2>
            <input value={value} onChange={e => setValue(e.target.value)}></input>
        </div>
    )
}

export default Counter