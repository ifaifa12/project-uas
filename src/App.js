import { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarBerita from "./components/Navbar.jsx";
import NewsList from "./components/NewsList.jsx";
import Footer from "./components/Footer.jsx";

function App ()  {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
//
    return (
        <>
        <NavbarBerita
           onSearch={setSearch}
           onCategory={setCategory}
        />
        
        <Container style={{ marginTop: "100px" }}>
          <NewsList keyword={search} category={category} />
        </Container>

        <Footer />
        </>
    );
};

export default App;