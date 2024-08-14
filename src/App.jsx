import React from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ContainerChart from "./components/ContainerChart";
import "./App.css";
import { StoreProvider } from "./components/Store";


function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
      <div className="app">

        <Header />
        <div className="main-content">
          <ContainerChart />
        </div>
      </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
