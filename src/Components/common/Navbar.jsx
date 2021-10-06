import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

class NavBar extends Component {
  onLogout(){
    alert("logout clicked")
    if (window.confirm("Are you sure to Logout?")) {
      localStorage.clear();
    }
 
  }
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">My Demo App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Users" to="/Users">Users</Nav.Link>
        <NavDropdown title="category" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">New Users</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Deleted Users</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Blocked Users</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Premium Users</NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link onclick="onLogout()">Logout</Nav.Link> */}
        <Button  variant="outline-light" onclick="onLogout()">
          logout
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
  }

  
}

export default NavBar;
