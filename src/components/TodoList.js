import React from 'react'
import { connect } from 'react-redux'
import {markAsDone} from '../redux/actions/todoActions'

const TodoList = (props) => {

    const handleTodoClick = (key)=>{
        props.markAsDone({key})
    }

    return (
        <div>
            <ul className="list-group">
                {
                props.todos.map( 
                    (todo) => {
                        return <li className="list-group-item" key={todo.key} onClick={()=>handleTodoClick(todo.key)} style={(todo.complete) ? {textDecoration: 'line-through'} : {}}>{todo.text}</li>
                    }
                )
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {

    return state.todoReducer
}

const mapDispatchToProps = {
    markAsDone    
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
