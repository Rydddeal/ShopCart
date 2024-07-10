import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Hero from "./Pages/Hero";
import Product from "./Pages/Product";
import Footer from "./Pages/Footer";
import Checkout from "./Pages/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header />
      <Hero />
      <Product />
      <Routes>
        <Route path="product" element={<Product />} />
        <Route
          path="product"
          element={<Product cart={cart} setCart={setCart} />}
        />
        <Route path="checkout" element={<Checkout cart={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
