import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, description } = props.service;
    return (
        <div className="service-container">
            <img src={img} className="card-img-top" alt="..." />
            <h1 className="p-4">name: {name}</h1>
            <p className="p-4">{description}</p>
            <Link to={`/ourservices/${id}`}>
                <Button className="w-50 m-5">See Full Services</Button>
            </Link>
        </div>







    );
};

export default Service;



{/* <div className="card" Style="width: 18rem;">
            <div>
               
            </div>
            <div className="card-body">
                <h5 className="card-title"> name: {name}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div> */}