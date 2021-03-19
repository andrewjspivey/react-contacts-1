import { createContext, useContext } from "react";

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

export const useAuth = () => useContext(AuthContext);

export default AuthContext;