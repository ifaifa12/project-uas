import React from "react";
import NavigationBar from "./components/Navbar.jsx";
import NewsList from "./components/NewsList.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>
        <NavigationBar />
           <h1>BERITA TERKINI</h1>
        
        <NewsList />
        <Footer />
        </>
    );
};

export default App;