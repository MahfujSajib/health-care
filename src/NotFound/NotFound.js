import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='m-5'>
            <h1>not found</h1>
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default NotFound;