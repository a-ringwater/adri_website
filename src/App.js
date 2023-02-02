import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RouterConfig from "./navigation/RouterConfig";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sidebar />
        <div id="content">
          <main className="main-content">
            <RouterConfig />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
