import './App.css';
import Navbar from './components/Navbar'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
       
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/todo">
            <Todo />
        </Route>
        <Route path="/counter">
            <Counter />
        </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
