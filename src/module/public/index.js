import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/components/home";
import ReducerExample from "./reducer-example/components/reducer-example";
import { AppState } from "../shared/";

class Public extends React.Component {
  render() {
    return (
      <AppState>
        <Routes>
          <Route path="/" element={<ReducerExample />}>
            <Route path="/reducer-example" element={<Home />} />
          </Route>
        </Routes>
      </AppState>
    );
  }
}

export default Public;
