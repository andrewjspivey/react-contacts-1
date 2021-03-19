import LoginForm from "./LoginForm"
import {Link} from 'react-router-dom'


const LoginPage = (props) => {
    return (
        <div>
            <LoginForm />
            <div>
                <p>Don't have an account? <Link to='/register'>Register</Link>.</p>
            </div>
        </div>
    )
}

export default LoginPage;