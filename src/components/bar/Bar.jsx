import React from "react";
import {prefix} from "./index";
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

class Bar extends React.Component {
    handleClick = (e) => {
        console.info(e)
    }

    render() {
        return (
            <Menu
                className={prefix}
                onClick={this.handleClick}
                theme='dark'
            >
                <Menu.Item
                    key='react'
                >
                    <Link to='/home/react'/>
                    react
                </Menu.Item>
                <Menu.Item
                    key='vue'
                >
                    <Link to='/home/vue'/>

                    vue
                </Menu.Item>
                <Menu.Item
                    key='js'
                >
                    <Link to='/home/js'/>

                    js
                </Menu.Item>
                <Menu.Item
                    key='jquery'
                >
                    <Link to='/home/jquery'/>

                    jquery
                </Menu.Item>
            </Menu>
        )
    }
}

export default Bar;
