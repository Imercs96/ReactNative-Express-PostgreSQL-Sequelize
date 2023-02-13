import { Router } from 'express';

import * as authControllers from '../controllers/auth';

const router: Router = Router();

// POST auth user
router.post('/', authControllers.authUser);

export default router;