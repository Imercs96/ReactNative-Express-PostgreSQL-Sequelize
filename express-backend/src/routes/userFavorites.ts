import { Router } from 'express';

import * as userFavoritesController from '../controllers/userFavorites';
import { getAuthUser } from '../middlewares/auth';

const router: Router = Router();

// GET all user favorites
router.get('/', userFavoritesController.getUserFavorites);

// GET user favorites by ID
router
  .use(getAuthUser)
  .get('/:id', userFavoritesController.getUserFavoritesById);

// DELETE user favorites by ID
router
  .use(getAuthUser)
  .delete('/:id', userFavoritesController.deleteUserFavoriteById);

// POST user favorite
router
  .use(getAuthUser)
  .post('/', userFavoritesController.addUserFavorites);

export default router;