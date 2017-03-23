import React, {Component} from "react";
import ReactDOM from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends Component {
    constructor() {
        super();
        this.state = {
            homeLink: "首页"
        };
    }

    onSayHello() {
        alert("hello");
    };

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        let user = {
            name: "forecho"
        };
        return (
            <div className="container">
                <Header homeLink={this.state.homeLink}/>
                <Home user={user} name={"echo"} initialAge={18} hello={this.onSayHello} changeLink={this.onChangeLinkName.bind(this)}>
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
