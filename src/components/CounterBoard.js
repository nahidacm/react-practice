import React from 'react'
import {connect} from 'react-redux'

const CounterBoard = (props)=>{
    return (
        <div>
            <h1>Score: {props.counter.counterIndex}</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps)(CounterBoard)
