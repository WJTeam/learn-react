import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//使用 commonJS 模块方式 *可能需要webpack插件
//import { Button } from 'react-weui'

//使用 ES6 方式引入
import WeUI from 'react-weui';

//引入样式库
import 'weui';
import 'react-weui/lib/react-weui.min.css';

const {Button} = WeUI;

class App extends Component {
    render() {
        return (
            <Button>hello wechat</Button>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
