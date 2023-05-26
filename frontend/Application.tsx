import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#application")!);
root.render(<Application />);
