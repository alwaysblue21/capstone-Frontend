import { Form } from "react-router-dom";

function Login(props){
    return <div>
        <h1>Login Form</h1>
        <Form action="/login" method="post">
        <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Login" />
        </Form>
    </div>
}

export default Login;