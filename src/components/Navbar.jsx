import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";

function NavbarBerita({ onSearch, onCategory }) {
    return (
        <Navbar bg="white" fixed="top" className="border-bottom">
            <Container>  
                <Navbar.Brand className="fw-bold text-danger fs-4">
                    Liputan6.com
                    </Navbar.Brand>
                
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => onCategory("All")}>Beranda</Nav.Link>
                        <Nav.Link onClick={() => onCategory("Nasional")}>Nasional</Nav.Link>
                        <Nav.Link onClick={() =>onCategory("Teknologi")}>Teknologi</Nav.Link>
                        <Nav.Link onClick={() => onCategory("Olahraga")}>Olahraga</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                      <FormControl
                        placeholder="Cari berita"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                  </Form> 
            </Container>
        </Navbar>
    );
}

export default NavbarBerita;