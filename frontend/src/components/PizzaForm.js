import React, { useState } from 'react';
import axios from 'axios';

function PizzaForm({ refresh }) {
  const [form, setForm] = useState({ name: '', description: '', price: '', ingredients: '', imageUrl: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, ingredients: form.ingredients.split(',') };
    await axios.post('/api/pizzas', payload);
    setForm({ name: '', description: '', price: '', ingredients: '', imageUrl: '' });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-1 w-full" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border p-1 w-full" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="border p-1 w-full" />
      <input name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients comma separated" className="border p-1 w-full" />
      <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" className="border p-1 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Pizza</button>
    </form>
  );
}

export default PizzaForm;
