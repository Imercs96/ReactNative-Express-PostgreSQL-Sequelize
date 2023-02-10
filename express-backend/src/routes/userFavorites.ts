import { Router } from 'express';

import * as userFavoritesController from '../controllers/userFavorites';

const router: Router = Router();

// GET all user favorites
router.get('/', userFavoritesController.getUserFavorites);

// GET user favorites by ID
router.get('/:id', userFavoritesController.getUserFavoritesById);

// DELETE user favorites by ID
router.delete('/:id', userFavoritesController.deleteUserFavoriteById);

// POST user favorite
router.post('/', userFavoritesController.addUserFavorites);

export default router;