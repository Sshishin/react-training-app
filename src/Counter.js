import { useState } from 'react';


function Counter() {
    const [state, setState] = useState(2)

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
        </div>
    )
}

export default Counter