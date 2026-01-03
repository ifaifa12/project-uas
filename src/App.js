import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarBerita from "./components/Navbar.jsx";
import NewsList from "./components/NewsList.jsx";
import Footer from "./components/Footer.jsx";

function App ()  {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
//
    return (
        <>
        <NavbarBerita onSearch={setSearch} onCategory={setCategory} />
        
        <Container style={{ marginTop: "90px" }}>
            <Row>
                <Col md={8}>
                  <NewsList keyword={search} category={category} />
            </Col>

        <Col md={4}>
         <div className="popular-box">
            <h5 className="fw-bold mb-3">Terpopuler</h5>
            <ol className="popular-list">
                <li>Harga BBM Naik Awal 2026</li>
                <li>Kedatangan Valen di Gedung Negara Grahadi Surabaya</li>
                <li>Teknologi Al Mulai Diterapkan di Sekolah</li>
                <li>Timnas Indonesia Lolos Final</li>
                <li>IHSG Dibuka Menguat</li>
                <li>Wisata Alam Tren 2026</li>
            </ol>
          </div>
        </Col>
    </Row>
</Container>

        <Footer />
        </>
    );
};

export default App;