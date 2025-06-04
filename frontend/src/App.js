import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PizzaList from './components/PizzaList';
import PizzaForm from './components/PizzaForm';

function App() {
  const [pizzas, setPizzas] = useState([]);

  const fetchPizzas = async () => {
    const res = await axios.get('/api/pizzas');
    setPizzas(res.data);
  };

  useEffect(() => { fetchPizzas(); }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PizzaTech</h1>
      <PizzaForm refresh={fetchPizzas} />
      <PizzaList pizzas={pizzas} refresh={fetchPizzas} />
    </div>
  );
}

export default App;
