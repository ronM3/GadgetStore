import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand onClick={() => navigate("/")}>  <img
              className="icon-header"
              src={'https://i.ibb.co/ZWGmM1F/logogadget.png'}
              alt=""
              style={{ maxHeight: "40px" }}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate("/cart")}><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              <Nav.Link onClick={() => navigate("/login")}><i className="fas fa-user"></i>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
