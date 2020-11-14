import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../redux/actions/todoActions'

export const AddTodo = (props) => {

    const [todo, setTodo] = useState({text: ''})
    const [addTodoInputClass, setAddTodoInputClass] = useState('form-control')
    const handleNewTodo = (e)=>{
        setTodo({text: e.target.value})
        setAddTodoInputClass('form-control')
    }
    
    const handleAddTodo = ()=>{
        if(todo.text){
            props.addTodo(todo)
            setTodo({text: ''})
        }else{
            setAddTodoInputClass('form-control is-invalid')
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddTodo()
        }
      }

    return (
        <div>
            <div className="col-auto">
                <div className="input-group">
                    <input type="text" className={addTodoInputClass} value={todo.text} onChange={ handleNewTodo } placeholder="New Todo" onKeyDown={handleKeyDown}/>
                    <div className="input-group-prepend">
                        <button type="button" className="btn btn-primary" onClick={handleAddTodo}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)
