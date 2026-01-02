import React from "react";
import NavigationBar from "./components/Navbar.jsx";
import NewsList from "./components/NewsList.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>
        <NavigationBar />

        {/* HERO / HEADER */}
        <div className="hero">
            <div className="hero-text">
              <h1>BERITA TERKINI</h1>
              <p>Update Nasional & Internal</p>
             </div>
           </div>

        <NewsList />
        <Footer />
        </>
    );
};

export default App;