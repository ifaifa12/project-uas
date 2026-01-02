import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar expand="lg" fixed="top" className="navbar-overlay">
            <Container>
                <Navbar.Brand href="#home" className="Navbar-title">
                 Liputan6.com
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Container.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="#pendidikan">Pendidikan</Nav.Link>
                        <Nav.Link href="#lingkungan">Lingkungan</Nav.Link>
                        <Nav.Link href="#ekonomi">Ekonomi</Nav.Link>
                        <Nav.Link href="#olahraga">Olahraga</Nav.Link>
                        <Nav.Link href="#budaya">Budaya</Nav.Link>
                        <Nav.Link href="#penyambutan valen">Penyambutan Valen</Nav.Link>
                    </Nav>
                </Container.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;