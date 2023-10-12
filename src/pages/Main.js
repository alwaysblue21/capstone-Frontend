import {Outlet, Link} from 'react-router-dom';

function Main(props){
    return <div>
        <h1>Welcome to the Lego Collection App</h1>
        <h3 className='dashboard'>Do you want to signup?</h3>
        <Link to="/signup"><button>Signup</button></Link>
        <h3 className='dashboard'>Do you want to login?</h3>
        <Link to="/login"><button>Login</button></Link>

        <Outlet />
    </div>
}

export default Main;