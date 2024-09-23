import * as React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoadMate from "./pages/projects/RoadMate";
import Acadix from "./pages/projects/Acadix";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/roadmate" element={<RoadMate />} />
          <Route path="/projects/acadix" element={<Acadix />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}
export default App;
