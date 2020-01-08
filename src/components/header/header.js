import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./header.css";
import { Navbar, Nav } from "react-bootstrap";
import PDF from "../resume/CV_AndyJeesuKim.pdf";

function Header(props) {
  return (
    <div className="header">
      <Navbar bg="light" expand="sm">
        <Navbar.Brand>
          <Link to="/">Andy</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/interest">Research Interests</Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/publications">Publications</Link>
            </Nav.Link>
            <Nav.Link href={PDF} target="_blank">
              CV
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/about">About Me</Link>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);
