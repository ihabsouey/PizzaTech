import React, { useState, useEffect } from "react";
import axios from "axios";
import PizzaList from "./components/PizzaList";
import PizzaForm from "./components/PizzaForm";

function App() {
  const [pizzas, setPizzas] = useState([]);
  
  const fetchPizzas = async () => {
    try {
      const res = await axios.get("http://3.17.6.252:5000/api/pizzas");
      setPizzas(res.data);
    } catch (err) {
      console.error("❌ Failed to fetch pizzas:", err);
    }
  };
  
  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">PizzaTech</h1>
      <PizzaForm refresh={fetchPizzas} />
      <PizzaList pizzas={pizzas} refresh={fetchPizzas} />
    </div>
  );
}

export default App;
