import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Service from './pages/Service';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Error404 from './pages/Error404';


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route  path = "/" element = {<Home />} />
      <Route  path = "/about" element = {<About />} />
      <Route  path = "/service" element = {<Service />} />
      <Route  path = "/contact" element = {<Contact />} />
      <Route  path = "*" element = {<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
