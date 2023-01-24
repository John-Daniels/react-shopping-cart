import React from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="app flex flex-col bg-lightGrey1 text-textColor pb-10">
        <Router>
          <>
            <Navbar />
          </>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
