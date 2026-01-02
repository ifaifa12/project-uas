import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";

function NavbarBerita({ onSearch, onCategory }) {
    return (
        <Navbar bg="light" expand="lg" fixed="top" className="border-bottom">
            <Container>
                <Navbar.Brand className="fw-bold text-danger">Liputan6.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-content" />
                <Navbar.Collapse id="navbar-content">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => onCategory("All")}>Beranda</Nav.Link>
                        <Nav.Link onClick={() => onCategory("Nasional")}>Nasional</Nav.Link>
                        <Nav.Link onClick={() =>onCategory("Teknologi")}>Teknologi</Nav.Link>
                        <Nav.Link onClick={() => onCategory("Olahraga")}>Olahraga</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Telusuri berita"
                        className="me-2"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                  </Form> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarBerita;