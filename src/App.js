import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { CartContext } from "./CartContext";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/product";

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <Navbar />
          <Banner />
          <Products />
          <Footer />
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
