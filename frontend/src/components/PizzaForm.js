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
    await axios.post('http://3.17.6.252:5000/api/pizzas', payload);
    setForm({ name: '', description: '', price: '', ingredients: '', imageUrl: '' });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2 bg-white p-4 rounded shadow">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full rounded" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full rounded" />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" className="border p-2 w-full rounded" />
      <input name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredients comma separated" className="border p-2 w-full rounded" />
      <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" className="border p-2 w-full rounded" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add Pizza</button>
    </form>
  );
}

export default PizzaForm;
