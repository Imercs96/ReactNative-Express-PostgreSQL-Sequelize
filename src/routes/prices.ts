import { Router } from 'express';

import * as pricesController from '../controllers/prices';

const router: Router = Router();

// GET data
router.get('/', pricesController.getData);

// POST data
router.post('/', pricesController.addPrice);

export default router;