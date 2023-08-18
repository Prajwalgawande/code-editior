import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../Styles/header.css'

const Header = () => {
  const isSignedin=window.location.pathname;
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className='navbarHighlight'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/" className="title">
          Code Editor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/editor">Compiler</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
         { isSignedin==="/editor" &&<Navbar.Text className="user">
            Signed in as: <a href="#login">User</a>
          </Navbar.Text>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
