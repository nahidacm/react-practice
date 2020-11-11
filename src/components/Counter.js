import React from 'react'
import CounterBoard from "./CounterBoard";
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'

function Counter() {
    return (
        <div>
            <CounterBoard/>
            <IncrementButton/>
            <DecrementButton/>
        </div>
    )
}

export default Counter
