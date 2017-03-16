import React, {Component} from "react";
import ReactDOM from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Home/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("container")
);
