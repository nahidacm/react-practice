import React, {useState} from 'react'
import {increment} from '../redux/actions/counterActions'
import {connect} from 'react-redux'

const IncrementButton = (props) => {
    const [incrementBy, setIncrementBy] = useState(1)
    const handleIncrementByChange = e => {
        setIncrementBy( Number(e.target.value))
    }
    return (
        <div>
            <button onClick={()=>props.increment({incrementBy})}>Increment</button> by <input type="text" onChange={handleIncrementByChange} value={incrementBy}/>
        </div>
    )
}

export default connect(null, {increment})(IncrementButton)
