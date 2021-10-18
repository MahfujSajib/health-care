import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="mt-5">
                <h1 className="doctors">Our Services</h1>
            </div>
            <div className="mt-5 services-container">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>




    );
};

export default Services;