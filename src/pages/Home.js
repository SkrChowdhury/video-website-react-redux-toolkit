import Pagination from "../components/ui/Pagination";
import React from "react";
import Tags from "../components/tags/Tags";
import VideoGrid from "../components/grid/VideoGrid";

export default function Home() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
}
