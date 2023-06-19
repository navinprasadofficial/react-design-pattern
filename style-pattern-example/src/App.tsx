import React from "react";
import logo from "./logo.svg";
import "./App.css";
import customStyles from "./CustomStyles.module.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <MyComponent className={customStyles.MyComponentStyle} />
    </div>
  );
}

export default App;
