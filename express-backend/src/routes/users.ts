import { Router } from 'express';

import * as usersController from '../controllers/users';

const router: Router = Router();

// GET all users 
router.get('/', usersController.getUsers);

// GET user by ID
router.get('/:id', usersController.getUserById);

// DELETE user by ID
router.delete('/:id', usersController.deleteUserById);

// POST user
router.post('/', usersController.addUser);

// PUT user by ID
router.put('/:id', usersController.putUserById);

// PATCH user by ID
router.patch('/:id', usersController.patchUserById);

export default router;