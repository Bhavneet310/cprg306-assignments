'use client';

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState(''); // State for the name field
  const [quantity, setQuantity] = useState(1); // Quantity already implemented
  const [category, setCategory] = useState('produce'); // State for the category field

  // Increment and Decrement functions for Quantity (already completed in Week 4)
  const increment = () => {
    setQuantity(prev => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create item object
    const item = {
      name,
      quantity,
      category
    };

    // Log the item object to the console
    console.log(item);

    // Display alert with the current state values
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset the form fields
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-bold text-white">Add New Item</h2>

      {/* Form for Name, Quantity, and Category */}
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        
        {/* Name Input */}
        <div className="flex flex-col">
          <label className="text-white font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 rounded-lg shadow-md border border-gray-300"
            placeholder="Enter item name"
          />
        </div>

        {/* Quantity Controls (from Week 4) */}
        <div className="flex items-center space-x-6 bg-white rounded-lg p-4 shadow-md">
          <button
            type="button"
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-400 transition duration-300 disabled:bg-red-200"
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="text-xl font-bold text-gray-700">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-400 transition duration-300 disabled:bg-green-200"
            disabled={quantity === 20}
          >
            +
          </button>
        </div>

        {/* Category Select */}
        <div className="flex flex-col">
          <label className="text-white font-semibold">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-lg shadow-md border border-gray-300"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-400 transition duration-300"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
