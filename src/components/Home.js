import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            homeLink: "开始"
        };
    }

    onMakeMe() {
        this.setState({
            age: this.state.age + 3
        });
    }


    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    render() {
        return (
            <div>
                <p> In a new Component!</p>
                <p>我的名字叫 {this.props.user.name}，{this.props.children}</p>
                <p>你的名字叫 {this.props.name}，今年{this.state.age}岁了</p>
                <button onClick={() => this.onMakeMe()} className="btn">点我试试看1</button>
                <hr/>
                <button onClick={this.onMakeMe.bind(this)} className="btn">点我试试看2</button>
                <hr/>
                <button onClick={this.props.hello} className="btn">打招呼</button>
                <hr/>
                <button onClick={this.onChangeLink.bind(this)} className="btn">点我改变菜单</button>
            </div>
        );
    }
}

// 规范参数类型
Home.propTypes = {
    name: React.PropTypes.string,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired, // React 元素 且必须
    hello: React.PropTypes.func // 函数式元素
};