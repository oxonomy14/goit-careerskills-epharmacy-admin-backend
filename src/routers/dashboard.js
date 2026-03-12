// src/routes/dashboard.js

import { Router } from 'express';
import { getDashboardController } from '../controllers/dashboard.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/dashboard', ctrlWrapper(getDashboardController));

export default router;
