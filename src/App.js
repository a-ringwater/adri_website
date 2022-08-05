import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RouterConfig from "./navigation/RouterConfig";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Navbar />
        <RouterConfig />
      </main>
    </BrowserRouter>
  );
}

export default App;
