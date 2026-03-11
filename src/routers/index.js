// src/routers/index.js

import { Router } from 'express';

import authRouter from './auth.js';
import customersRouter from './customers.js';

const router = Router();

router.use('/api/user', authRouter);

router.use('/api', customersRouter);

export default router;
