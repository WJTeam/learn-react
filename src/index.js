import React, {Component} from "react";
import ReactDOM from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends Component {
    constructor() {
        super();
        this.state = {
            homeLink: "首页",
            homeMounted: true
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

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }

    render() {
        let user = {
            name: "forecho"
        };

        let homeComponent = "";
        if (this.state.homeMounted) {
            homeComponent = (
                <Home user={user}
                      name={"echo"}
                      initialAge={18}
                      hello={this.onSayHello}
                      initialLinkName={this.state.homeLink}
                      changeLink={this.onChangeLinkName.bind(this)}>
                    <span>我今年18岁了</span>
                </Home>
            );
        }
        return (
            <div className="container">
                <Header homeLink={this.state.homeLink}/>

                {homeComponent}

                <button onClick={this.onChangeHomeMounted.bind(this)} className="btn">点我显示隐藏</button>

            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("container")
);
