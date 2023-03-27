import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import AllInOne from "./Components/AllInOne";
import Pricing from "./Components/Pricing";
import Support from "./Components/Support";
import Footer from "./Components/Footer";

function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Support/>
            <AllInOne/>
            <Pricing/>
            <Footer/>
        </div>
    );
}

export default App;
