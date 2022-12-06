import { Form, Button, Input } from "antd"
import { useAuth } from "context/auth_context"
import { FormEvent } from "react"
// const apiUrl = process.env.REACT_APP_API_URL
export const LoginSreen = () =>{
    console.log(useAuth())
    const { login, user } = useAuth()
    // const handleSubmit = (event:FormEvent<HTMLFormElement>) =>{
    //     event.preventDefault()
    //     const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    //     const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    //     login({username, password})
    // }
    const handleSubmit = (values:{username: string, password: string}) => {
        login(values)
    }
    return (
        <Form onFinish={handleSubmit}>
            {
                user && `登录成功 用户名${user.name}`
            }
            <Form.Item
                label="username"
                name="username"
            >
                <Input type="text" id={'username'}/>
            </Form.Item>
            <Form.Item
                label="password"
                name="password"
            >
                <Input type="password" id={'password'}/>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary">登录</Button>
            </Form.Item>
        </Form>
    )
}