import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Product from "./pages/Product/Product";
import Singleproduct from  "./pages/Product/id/Singleproduct"


const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/product/:id" element={<Singleproduct/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
