"use client";
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';
const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });
  const handleGroupByCategory = () => {
    return sortedItems.reduce((acc, item) => {
      const { category } = item;
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});
  };
  const groupedItems = handleGroupByCategory();
  return (
    <div>
      <div>
        <button
          onClick={() => setSortBy('name')}
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}>
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}>
          Sort by Category
        </button>
      </div>
      <h2>Grouped by Category:</h2>
      {Object.keys(groupedItems).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {groupedItems[category].map(item => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ItemList;


