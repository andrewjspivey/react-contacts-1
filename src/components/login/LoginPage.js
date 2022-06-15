import LoginForm from "./LoginForm"
import {Link, Redirect} from 'react-router-dom'
import {useAuth} from '../../contexts/AuthContext'

const LoginPage = (props) => {

    const {user} = useAuth()

    return (
        <div>
            {user
            ? <Redirect to="/" />
            : <>
                <LoginForm />
                <div>
                    <p>Don't have an account? <Link to='/register'>Register</Link>.</p>
                </div>
            </>
            }
        </div>
    )
}

export default LoginPage;