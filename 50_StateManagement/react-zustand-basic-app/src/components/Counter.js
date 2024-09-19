import React from 'react'
import { useCounterStore } from '../store/useCounterStore'

const Counter = () => {

    const { count, increment, decrement, reset, setNumber } = useCounterStore()

    const claer = () => {
        useCounterStore.persist.clearStorage()
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>one up</button>
            <button onClick={decrement}>one down</button>
            <button onClick={reset}>reset</button>
            <button onClick={() => setNumber(3)}>3</button>
            <button onClick={claer}>Claer</button>
        </div>
    )
}

export default Counter