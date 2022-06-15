import {React, Component} from 'react';

import {Redirect, Link, Route} from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';


export const PrivateRoute = ({ component: Component, path, ...rest }) => {

    const { user } = useAuth()

    return (
        <Route path={path} {...rest} render={(props) => (
            <>
            {user
            ? <Component {...props} />
            : <Redirect to='/login' />
        }
        </>
    )} />
    )
}


