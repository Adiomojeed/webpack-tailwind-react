import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import "./assets/styles/output.css";

const App = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.querySelector("#app"));
