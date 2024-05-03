
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import Dashboard from "./dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
