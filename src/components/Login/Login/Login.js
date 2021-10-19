import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    // const { signInusingGoogle } = useAuth()
    return (
        <div className="m-5">
            <h2>please log in</h2>
            <button className="btn btn-primary">Google Sign in</button>
        </div>
    );
};

export default Login;