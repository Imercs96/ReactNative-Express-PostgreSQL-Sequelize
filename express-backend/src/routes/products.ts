import { Router } from 'express';

import * as productsController from '../controllers/products';

const router: Router = Router();

// GET all data 
router.get('/', productsController.getProducts);

// GET data by ID
router.get('/:id', productsController.getProductById);

// DELETE data by ID
router.delete('/:id', productsController.deleteProductById);

// POST data
router.post('/', productsController.addProduct);

// PUT data by ID
router.put('/:id', productsController.putProductById);

// PATCH data by ID
router.patch('/:id', productsController.patchProductById);

export default router;