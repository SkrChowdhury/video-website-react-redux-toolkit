import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import Video from "./pages/Video";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
      </Routes>

      <Footer />
    </Router>
  );
}
