import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }

    onMakeMe() {
        console.log(this.age);
        this.age += 3;
    }

    render() {
        return (
            <div>
                <p> In a new Component!</p>
                <p>我的名字叫 {this.props.user.name}，{this.props.children}</p>
                <p>你的名字叫 {this.props.name}，今年{this.age}岁了</p>
                <button onClick={() => this.onMakeMe()} className="btn">点我试试看1</button>
                <button onClick={this.onMakeMe.bind(this)} className="btn">点我试试看2</button>
            </div>
        );
    }

}

// 规范参数类型
Home.propTypes = {
    name: React.PropTypes.string,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired // React 元素 且必须
};