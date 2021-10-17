import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="navbar">
            <Nav className="nav">
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/about">About Us</Link>
                <Link className="link" to="/contact">Contact Us</Link>
            </Nav>
            <h1 className="name">DOCTOR LAGBE</h1>
        </Navbar>
    );
};

export default Header;