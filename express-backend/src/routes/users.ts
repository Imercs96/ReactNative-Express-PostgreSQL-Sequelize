import { Router } from 'express';

import * as usersController from '../controllers/users';

const router: Router = Router();

// GET all data 
router.get('/', usersController.getUsers);

// GET data by ID
router.get('/:id', usersController.getUserById);

// DELETE data by ID
router.delete('/:id', usersController.deleteUserById);

// POST data
router.post('/', usersController.addUser);

// PUT data by ID
router.put('/:id', usersController.putUserById);

// PATCH data by ID
router.patch('/:id', usersController.patchUserById);

export default router;