import './App.css';
import CounterBoard from './components/CounterBoard'
import IncrementButton from './components/IncrementButton'
import DecrementButton from './components/DecrementButton'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <CounterBoard/>
      <IncrementButton/>
      <p></p>
      <DecrementButton/> 
      <p></p>
      <div>
        <AddTodo/>
      </div>
      <div>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
