import React from 'react';
import './Banner.css';
import img from '../../../images/Banner/banner.jpg'

const Banner = () => {
    return (

        <div>

            <div className="banner">
                <marquee className='mt-5 mb-4'><h3>We Are Providing Best Medical Care</h3></marquee>
                <img className="img-fluid" src={img} alt="" />
            </div>


        </div>

    );
};

export default Banner;