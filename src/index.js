import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {Home} from "./components/Home";
import {User} from "./components/User";
import {Topics} from "./components/Topics";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr/>

                    <Route path="/" component={Home}/>
                    <Route path="/user" component={User}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("container")
);
