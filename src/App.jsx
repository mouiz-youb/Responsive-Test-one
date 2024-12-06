import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Cart from "./Components/Cart.jsx";
import Fotter from "./Components/Fotter.jsx";
import { useClick } from "./Store/useClick.js";
function App() {
  const click = useClick((state) => state.click);
  return (
    <div className={click ? `` : `app-conatiner`}>
      <NavBar />
      <Hero />
      <Cart />
      <Fotter />
    </div>
  );
}

export default App;
