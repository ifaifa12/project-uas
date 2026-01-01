import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Liputan6.com </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pendidikan">Pendidikan</Nav.Link>
                        <Nav.Link href="#lingkungan">Lingkungan</Nav.Link>
                        <Nav.Link href="#ekonomi">Ekonomi</Nav.Link>
                        <Nav.Link href="#olahraga">Olahraga</Nav.Link>
                        <Nav.Link href="#budaya">Budaya</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;