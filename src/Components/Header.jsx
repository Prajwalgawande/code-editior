import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/header.css'
import logo from '../assets/logo.svg'
const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark"> 
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>
        <Navbar.Brand href="#" className='title'>Code Editior</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='user'>
          Signed in as : <a href="#login" > User</a> 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header