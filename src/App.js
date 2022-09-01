import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RouterConfig from "./navigation/RouterConfig";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <RouterConfig />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
