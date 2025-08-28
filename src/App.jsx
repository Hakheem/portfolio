import * as React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load route components
const Home = lazy(() => import("./pages/home/Home"));
const Projects = lazy(() => import("./pages/projects/Projects"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const RoadMate = lazy(() => import("./pages/projects/RoadMate"));
const Acadix = lazy(() => import("./pages/projects/Acadix"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
  </div>
);

function App() {
  return (
    <ChakraProvider> 
      <div>
        <Navbar/>
        <ScrollToTop/>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/roadmate" element={<RoadMate />} />
            <Route path="/projects/acadix" element={<Acadix />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}
export default App;
