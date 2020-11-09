import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../redux/actions/todoActions'

export const AddTodo = (props) => {

    const [todo, setTodo] = useState({text: ''})
    const handleNewTodo = (e)=>{
        setTodo({text: e.target.value})
    }
    const handleAddTodo = ()=>{
        props.addTodo(todo)
        setTodo({text: ''})
    }

    return (
        <div>
            <input type="text" value={todo.text} onChange={ handleNewTodo }/>
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)
