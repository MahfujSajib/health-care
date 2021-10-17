import React from 'react';
import './Footer.css'

const Footer = () => {
    return (


        <div className="container">
            <div>
                <h1 className="footer-text">Doctor Lagbe</h1>
                <p className="footer-text">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare.</p>
            </div>
            <div>
                <h2 className="footer-text">Departments</h2>
                <ul className="footer-text">
                    <li>Neurology Clinic</li>
                    <li>Cardiology Clinic</li>
                    <li>Pathology Clinic</li>
                    <li>Cardiac Clinic</li>
                    <li>Pediatric Clinic</li>
                </ul>
            </div>
        </div>


    );
};

export default Footer;