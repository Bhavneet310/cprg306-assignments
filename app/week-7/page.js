"use client"; 
import React, { useState } from 'react';
import ItemList from './ItemList';
import AddNewItem from './AddNewItem';
import initialItems from './items.json';
const ShoppingPage = () => {
  const [items, setItems] = useState(initialItems);
  const addItem = (item) => {
    setItems((previousItems) => [...previousItems, item]);
  };
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Shopping List</h1>
        <AddNewItem onItemAdd={addItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
};
export default ShoppingPage;

