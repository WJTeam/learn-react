import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            homeLink: props.initialLinkName
        };
    }

    onMakeMe() {
        this.setState({
            age: this.state.age + 3
        });
    }

    componentWillMount() {
        console.log("组件将挂载");
    }

    componentDidMount() {
        console.log("组件已经挂载");
    }

    componentWillReceiveProps(nextProps) {
        console.log("组件将要接受参数", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("组件应该更新吗？", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("组件将要更新", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("组件已经更新", prevProps, prevState);

    }

    componentWillUnmount() {
        console.log("组件将要取消挂载");
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChangeLink(event) {
        this.setState({
            homeLink: event.target.value
        });
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
                <input type="text" value={this.state.homeLink} onChange={this.onHandleChangeLink.bind(this)}/>
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