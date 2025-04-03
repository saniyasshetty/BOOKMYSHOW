import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">BookMyShow 2.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* ✅ Home Page */}
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link> {/* ✅ Movies Page */}
            <Nav.Link as={Link} to="/events">Events</Nav.Link> {/* ✅ Events Page */}
            <Nav.Link as={Link} to="/sports">Sports</Nav.Link> {/* ✅ Sports Page */}
          </Nav>
          <Nav>
            <Button variant="outline-light" as={Link} to="/login">Sign In</Button> {/* ✅ Login Page */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Navigation;


