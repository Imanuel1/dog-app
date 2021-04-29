import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './CustomNavBar.css'

function CustomNavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Dog Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/breeds">Breed</Nav.Link>
                        <Nav.Link href="#/">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavBar;