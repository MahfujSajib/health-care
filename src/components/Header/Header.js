import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    // const { users, logOut } = useAuth();
    return (
        <Navbar bg="dark" variant="dark" className="navbar" collapseOnSelect expand="lg" sticky="top">
            <Nav className="nav">
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/about">About Us</Link>
                <Link className="link" to="/ourservices/:serviceId">Our Services</Link>
                <Link className="link" to="/contact">Contact Us</Link>
                <Link className="link" to="/login">Log in</Link>
            </Nav>
            <h1 className="name">DOCTOR LAGBE</h1>
        </Navbar >
    );
};

export default Header;