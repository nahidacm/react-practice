import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Counter from './Counter'
import Todo from './Todo'
import Home from './Home'

function Navbar() {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/todo">Todo</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    </ul>

                    <hr />

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
                </div>
            </Router>            
        </div>
    )
}

export default Navbar
