import React from "react";
import logo from "../images/logo.svg";
import "../styles/Nav.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            scr={logo}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="/About" className="about">
              ABOUT
            </Nav.Link>
            <Nav.Link href="/Reported" className="reported">
              WHAT CAN BE REPORTED
            </Nav.Link>
            <Nav.Link href="/ContactPage" className="contact">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
