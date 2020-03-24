import React from "react";
import { prefix} from "./index";
import {  Layout ,Form, Input, Button } from 'antd';



class Login extends React.Component {
    handleSubmit = (e) => {
        this.props.history.push('/home')
    }

    handleregister = () => {
        this.props.history.push('/register')
        console.info(this.props)
    }
    render () {
        return (
            <Layout>
                <div className={prefix}>
                <Form
                    onFinish={this.handleSubmit}
                    className={`${prefix}-form`}
                >
                    <Form.Item
                        name='username'
                        rules={[{required: true, message:'请输入用户名'}]}
                    >
                        <Input
                            placeholder='用户名'
                        />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{required: true, message:'请输入密码'}]}
                    >
                        <Input
                            type='password'
                            placeholder='密码'
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className={`${prefix}-btn`}>
                            <Button
                            className={`${prefix}-gologin`}
                            type='primary'
                            htmlType='submit'
                        >登录</Button>
                        <Button
                            className={`${prefix}-goregister`}
                            type='primary'
                            onClick={this.handleregister}
                        >注册</Button>
                        </div>
                    </Form.Item>
                </Form>
                </div>
            </Layout>
        )
    }
}
export default Login;
