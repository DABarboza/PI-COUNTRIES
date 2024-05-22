import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/LandingPage/landigPage";
import HomePage from "./components/HomePage/homePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
