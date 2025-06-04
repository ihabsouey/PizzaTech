import Pizza from '../models/Pizza.js';

export const getPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createPizza = async (req, res) => {
  try {
    const pizza = await Pizza.create(req.body);
    res.status(201).json(pizza);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updatePizza = async (req, res) => {
  try {
    const pizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pizza);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deletePizza = async (req, res) => {
  try {
    await Pizza.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pizza deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
