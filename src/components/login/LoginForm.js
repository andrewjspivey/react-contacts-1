import React, { useContext } from 'react';
import {useHistory} from 'react-router'
import {Redirect} from 'react-router-dom'

import AuthContext from '../../contexts/AuthContext';

class LoginForm extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.context.login(this.state.username, this.state.password);
    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        )
    }
}

export default LoginForm;