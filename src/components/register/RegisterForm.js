import React, { useState } from 'react';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        
    }


        return (
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username"
                        name="username"
                        type="text" 
                        placeholder="Username"  
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password"
                        name="password"
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        )
    }


export default RegisterForm;