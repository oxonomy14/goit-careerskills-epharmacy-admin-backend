// src/routers/index.js

import { Router } from 'express';

import authRouter from './auth.js';
import customersRouter from './customers.js';
import dashboardRouter from './dashboard.js';
import ordersRouter from './orders.js';

const router = Router();

router.use('/api/user', authRouter);

router.use('/api', customersRouter);

router.use('/api', dashboardRouter);

router.use('/api', ordersRouter);

export default router;
