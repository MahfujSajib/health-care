import React from 'react';
import { useParams } from 'react-router';

const OurServices = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>My Service: {serviceId}</h1>
        </div>
    );
};

export default OurServices;