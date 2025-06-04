import React from 'react';
import axios from 'axios';

function PizzaList({ pizzas, refresh }) {
  const deletePizza = async (id) => {
    await axios.delete(`/api/pizzas/${id}`);
    refresh();
  };

  return (
    <ul className="space-y-2">
      {pizzas.map((pizza) => (
        <li key={pizza._id} className="border p-2 flex justify-between">
          <span>{pizza.name} - ${pizza.price}</span>
          <button onClick={() => deletePizza(pizza._id)} className="text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default PizzaList;
