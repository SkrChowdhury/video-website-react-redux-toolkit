import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import Pagination from "../components/ui/Pagination";
import React from "react";
import Tags from "../components/tags/Tags";
import VideoGrid from "../components/grid/VideoGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </>
  );
}
