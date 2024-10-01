
export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-4 border-b border-gray-200">
      <div>
        <span className="font-semibold text-lg">{name}</span> 
        <span className="block text-gray-500 text-sm">{category}</span>
      </div>
      <div className="text-gray-700 font-medium">Qty: {quantity}</div>
    </li>
  );
}

