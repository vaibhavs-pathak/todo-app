import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/components/home";

class Public extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    );
  }
}

export default Public;
