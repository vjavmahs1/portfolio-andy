import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./header.css";
import { Navbar, Nav } from "react-bootstrap";
import PDF from "../resume/CV_AndyJeesuKim.pdf";

function Header(props) {
  return (
    <Navbar className="myHeader" expand="sm" fixed="top">
      <Navbar.Brand>
        <Link className="link" to="/">
          Andy
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="link" to="/interest">
              Research Interests
            </Link>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link className="link" to="/publications">
              Publications
            </Link>
          </Nav.Link>
          <Nav.Link className="link" href={PDF} target="_blank">
            <a className="link">CV</a>
          </Nav.Link>
          <Nav.Link href="#link">
            <Link className="link" to="/about">
              About Me
            </Link>{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
