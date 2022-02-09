import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="sm" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <span className="logo">logo</span>
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
            <Nav.Link>
              {" "}
              {props.countCartItems ? (
                <button className="badge">{props.countCartItems}</button>
              ) : (
                ""
              )}
            </Nav.Link>{" "}
            <Nav.Link href="/Reported" className="reported">
              WHAT CAN BE REPORTED
            </Nav.Link>
            <Button className="contact" variant="outline-danger">
              CONTACT US
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;