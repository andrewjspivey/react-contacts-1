import { useState } from "react";
import AuthContext from "../AuthContext";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const loginUser = (username, password) => {
        const validUsername = 'user';
        const validPassword = 'supersecret';

        if (username === validUsername && password === validPassword) {
            setUser(username);
        }
    };

    const logoutUser = () => {
        setUser(null);
    };


    return (
        <AuthContext.Provider value={{ user, login: loginUser, logout: logoutUser }}>
            { children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;