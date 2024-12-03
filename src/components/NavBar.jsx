import React from 'react';
import CartWidget from './CartWidget';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">FRIMA - Pastillas de Freno y Repuestos</Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link href="#">Pastillas de Freno</Nav.Link>
          <Nav.Link href="#">Repuestos</Nav.Link>
          <Nav.Link href="#">Accesorios</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
       
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;