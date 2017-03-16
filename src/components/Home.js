import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p> In a new Component!</p>
                <p>我的名字叫 {this.props.user.name}，{this.props.children}</p>
                <p>你的名字叫 {this.props.name}</p>
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