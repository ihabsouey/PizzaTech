import React from 'react';
import axios from 'axios';

function PizzaList({ pizzas, refresh }) {
  const deletePizza = async (id) => {
    await axios.delete(`http://3.17.6.252:5000/api/pizzas/${id}`);
    refresh();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {pizzas?.map((pizza) => (
        <div key={pizza._id} className="bg-white rounded-lg shadow-md overflow-hidden border">
          {pizza.imageUrl && (
            <img
              src={pizza.imageUrl}
              alt={pizza.name}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4 flex flex-col justify-between h-full">
            <h2 className="text-xl font-semibold mb-2">{pizza.name}</h2>
            <p className="text-gray-700 text-sm flex-1">{pizza.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-green-600 font-bold">${pizza.price.toFixed(2)}</span>
              <button
                onClick={() => deletePizza(pizza._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PizzaList;
