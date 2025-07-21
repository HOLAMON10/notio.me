import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import Collage from "./components/Collage";
import HorizontalMenu from "./components/menu";
import Writings from "./components/writings";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/collage" element={<Collage />} />
            <Route path="/writings" element={<Writings/>}/>
          </Routes>
        </div>
        <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
          <HorizontalMenu />
        </footer>
      </div>
    </Router>
  );
}

export default App;
