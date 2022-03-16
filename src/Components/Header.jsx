import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
             <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      Contact App
      </Navbar.Brand>
    </Container>
  </Navbar>

            
            </>
  )
}

export default Header