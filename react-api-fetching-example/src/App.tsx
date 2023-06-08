import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Quotes from "./pages/Quotes/Quotes";
import CovidStats from "./pages/CovidStats/CovidStats";
import Users from "./pages/Users/Users";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Quotes />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/covid" element={<CovidStats />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
