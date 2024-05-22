import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/LandingPage/landigPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
