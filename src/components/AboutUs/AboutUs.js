import React from 'react';
import './AboutUs.css';
import image from '../../images/aboutus/aboutusbanner.jpg'

const AboutUs = () => {
    return (
        <div className="aboutus">
            <div className="mt-5 m-5">
                <h1 className="about">Caring For The Health & Well Being Of Family.</h1>
                <p>Doctor Lagbe has been present in Bangladesh since 2020, offering innovative solutions, specializing in medical services for treatment of medical infrastructure.</p>
            </div>
            <img className="img-fluid" src={image} alt="" />

        </div>
    );
};

export default AboutUs;