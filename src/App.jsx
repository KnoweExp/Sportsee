import React from "react";
import Header from "./components/Header";
import ContainerChart from "./components/ContainerChart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <ContainerChart />
      </div>
    </div>
  );
}

export default App;
