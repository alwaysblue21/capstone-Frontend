import { Form } from "react-router-dom";

function Signup(props){
    return <div>
        <h3 className="dashboard">Signup Form</h3>
        <Form action="/signup" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Signup" />
        </Form>
    </div>
}

export default Signup;