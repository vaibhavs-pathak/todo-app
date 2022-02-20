import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/semantic/semantic.css";
import Public from "./module/public";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Public />} />
        </Routes>
      </div>
    );
  }
}

export default App;
