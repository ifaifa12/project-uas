import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="home" className="fw-bold">
                    Liputan6.com
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-3">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pendidikan">Pendidikan</Nav.Link>
                        <Nav.Link href="#lingkungan">Lingkungan</Nav.Link>
                        <Nav.Link href="#ekonomi">Ekonomi</Nav.Link>
                        <Nav.Link href="#olahraga">Olahraga</Nav.Link>
                        <Nav.Link href="#budaya">Budaya</Nav.Link>
                        <Nav.Link href="#penyambutan-valen">Penyambutan Valen</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;