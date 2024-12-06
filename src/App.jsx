import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Cart from "./Components/Cart.jsx";
import Fotter from "./Components/Fotter.jsx";
function App() {
  return (
    <div className="app-conatiner">
      <NavBar />
      <Hero />
      <Cart />
      <Fotter />
    </div>
  );
}

export default App;
