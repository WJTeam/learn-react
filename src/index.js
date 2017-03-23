import React, {Component} from "react";
import ReactDOM from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends Component {
    render() {
        let user = {
            name: "forecho"
        };
        return (
            <div className="container">
                <Header homeLink="首页"/>
                <Home user={user} name={"echo"} initialAge={18}>
                    <span>我今年18岁了</span>
                </Home>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("container")
);
