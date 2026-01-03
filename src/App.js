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
                <li>
                     <a href="#news-1">Harga BBM Naik Awal 2026</a>
                  </li>
                  <li>
                     <a href="#news-2">Kedatangan Valen di Gedung Negara Grahadi Surabaya</a>
                  </li>
                   <li>
                     <a href="#news-3">Teknologi Al Mulai Diterapkan di Sekolah</a>
                  </li>
                  <li>
                     <a href="#news-4">Timnas Indonesia Lolos Final</a>
                  </li>
                  <li>
                     <a href="#news-5">IHSG Dibuka Menguat</a>
                  </li>
                  <li>
                     <a href="#news-6">Wisata Alam Tren 2026</a>
                 </li>
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