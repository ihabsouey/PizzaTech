import { Router } from 'express';
import { getPizzas, createPizza, updatePizza, deletePizza } from '../controllers/pizzaController.js';

const router = Router();

router.get('/', getPizzas);
router.post('/', createPizza);
router.put('/:id', updatePizza);
router.delete('/:id', deletePizza);

export default router;
