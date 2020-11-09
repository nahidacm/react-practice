import {combineReducers} from 'redux'
import counter from './counter'
import todoReducer from './todoReducer'

export default combineReducers({counter, todoReducer})