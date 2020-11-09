import React from 'react'
import { decrement } from "../redux/actions/counterActions";
import {connect} from 'react-redux'

function DecrementButton(props) {
    return (
        <div>
            <button onClick={()=>props.decrement({})}>Decrement</button>
        </div>
    )
}

export default connect(null, {decrement})(DecrementButton)
