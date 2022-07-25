import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Amazon
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/sigin">Sign In</a>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="product/:id" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
          </Routes>
        </main>
        <footer className="row center">All Rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
