import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/resturant" className="nav-link">Resturant</Link>
            <Link to="/users/" className="nav-link">users</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
