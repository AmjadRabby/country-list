import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar style={{ marginBottom: '100px'}} expand="lg" variant="light" bg="secondary" fixed="top">
            <Container>
                <Link to="/home" style={{ width: '100%', fontWeight: 'bold', fontSize: '33px', textDecoration: 'none' }}  className="text-center text-dark " >Worlds Country Information </Link>
            </Container>
        </Navbar>
    );
};

export default NavBar;