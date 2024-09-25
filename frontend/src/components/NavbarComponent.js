import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiShoppingCartLine, RiUserLine } from "react-icons/ri";
import "../styles/NavbarComponent.css"; // Import the CSS file for any additional styles

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/" href="#home" className="navbar-brand">
        kitabay
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#books" className="navbar-icon">
            Books
          </Nav.Link>
          <Nav.Link href="#authors" className="navbar-icon">
            Authors
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#cart">
            <RiShoppingCartLine className="navbar-icon" />
          </Nav.Link>
          <Nav.Link href="#profile">
            <RiUserLine className="navbar-icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
