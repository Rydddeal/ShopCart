import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import crustring from "../images/Crustring.png";
import earrings from "../images/Earrings.png";
import lhal from "../images/Lhal.png";
import lushbracelet from "../images/Lushbracelet.png";
import necklace from "../images/Necklace.png";
import pendant from "../images/Pendant.png";
import siublack from "../images/Siublack.png";
import Next from "./Next";

const Product = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Lush Bracelet",
      imageUrl: lushbracelet,
      rating: "★★★★☆",
      price: "$85.00",
    },
    {
      id: 2,
      name: "L'Hal Necklace",
      imageUrl: lhal,
      rating: "★★★☆☆",
      price: "$60.99",
    },
    {
      id: 3,
      name: "Love Earrings",
      imageUrl: earrings,
      rating: "★★★★★",
      price: "$50.00",
    },
    {
      id: 4,
      name: "Frida Crust Ring",
      imageUrl: crustring,
      rating: "★★★★☆",
      price: "$110.00",
    },
    {
      id: 5,
      name: "Pendant de Blu",
      imageUrl: pendant,
      rating: "★★★★★",
      price: "$60.99",
    },
    {
      id: 6,
      name: "Siu Black Bracelet",
      imageUrl: siublack,
      rating: "★★★☆☆",
      price: "$53.00",
    },
    {
      id: 7,
      name: "Opal Bracelet",
      imageUrl: lushbracelet,
      rating: "★★★★☆",
      price: "$23.50",
    },
    {
      id: 8,
      name: "Silver Necklace",
      imageUrl: necklace,
      rating: "★★★★★",
      price: "$60.99",
    },
    {
      id: 9,
      name: "Love Earrings",
      imageUrl: earrings,
      price: "$50.00",
      rating: "★★★★★",
    },
  ];  function addToCart (product) {
    setCart((prevCart) => [...prevCart, product]);
    navigate("/CheckoutPage");
  };

  return (
    <div className="container mx-auto py-8 mb-16">
      <h1 className="text-4xl font-bold mb-12 mt-4 text-center font-mono">
        NEW ARRIVALS
      </h1>
      <div className="grid grid-cols-3 gap-10 ml-16 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg"
          >
            <img
              className="w-64 h-40 object-contain"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="px-12 py-4">
              <div className="font-bold text-2xl mb-2">{product.name}</div>
              <div className="flex items-center mb-4">
                <div className="text-yellow-400">{product.rating}</div>
              </div>
              <p className="text-gray-700 text-2xl mb-2 py-2 font-serif">
                {product.price}
              </p>
              <button
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-8  rounded "
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Next />
    </div>
  );
};

export default Product;
