import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import './header.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Header(props) {


    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href=""></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Research Interests</Nav.Link>
                <Nav.Link href="#link">Publications</Nav.Link>
                <Nav.Link href="#link">CV</Nav.Link>
                <Nav.Link href="#link">About Me</Nav.Link>

                </Nav>
            </Navbar.Collapse>
            </Navbar>


        </div>
    )
}

export default withRouter(Header);