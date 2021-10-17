import React from 'react';
import './Banner.css';
import img from '../../../images/Banner/banner.jpg'

const Banner = () => {
    return (

        <div className='banner'>
            <h1 className='mt-5'>Providing Best Medical Care</h1>
            <img className="img-fluid" src={img} alt="" />
        </div>

    );
};

export default Banner;