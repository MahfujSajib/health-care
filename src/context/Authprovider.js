import React, { createContext } from 'react';
import useFIrebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const Authprovider = ({ children }) => {
    const allContext = useFIrebase()
    return (
        <AuthContext.Provider valur={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;