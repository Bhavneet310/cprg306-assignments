'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prev => Math.min(prev + 1, 20)); // Max quantity is 20
  };

  const decrement = () => {
    setQuantity(prev => Math.max(prev - 1, 1)); 
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-xs mx-auto text-center">
      <h2 className="text-xl font-semibold mb-4">Select Quantity</h2>
      <div className="flex justify-center items-center">
        <button
          onClick={decrement}
          className="px-3 py-1 bg-red-500 text-white rounded-md disabled:bg-red-200"
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="mx-4 text-lg">{quantity}</span>
        <button
          onClick={increment}
          className="px-3 py-1 bg-green-500 text-white rounded-md disabled:bg-green-200"
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
    </div>
  );
}

