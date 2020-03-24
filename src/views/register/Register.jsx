import React from "react";
import { prefix } from "./index";
import { Layout, Form, Button, Input } from 'antd';
class Register extends React.Component {
    handleLogin = () => {
        this.props.history.push('/login')
    };
    handleSubmit = (e) => {
        const {
            password,
            passwordConfig
        } = e;
        if (password !== passwordConfig) {

        }
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
                    <Form.Item
                        name='passwordConfig'
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
                            className={`${prefix}-gosubmit`}
                            type='primary'
                            htmlType='submit'
                        >确认</Button>
                        <Button
                            className={`${prefix}-gologin`}
                            type='primary'
                            onClick={this.handleLogin}
                        >去登陆</Button>
                        </div>
                    </Form.Item>
                </Form>
                </div>
            </Layout>
        )
    }
}
export default Register;
