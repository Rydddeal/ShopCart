import React from "react";

function Checkout ({ cart }) {
  return (
    <div className="container mx-auto py-8 mb-16">
      <h1 className="text-4xl font-bold mb-12 mt-4 text-center font-mono">
        Checkout
      </h1>
      <div className="grid grid-cols-1 gap-10 ml-16">
        {cart.map((item, index) => (
          <div
            key={index}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg"
          >
            <img
              className="w-64 h-40 object-contain"
              src={item.imageUrl}
              alt={item.name}
            />
            <div className="px-12 py-4">
              <div className="font-bold text-2xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-2xl mb-2 py-2 font-serif">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
