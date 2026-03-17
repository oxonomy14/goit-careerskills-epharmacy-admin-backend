// src/routers/orders.js

import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { authenticate } from '../middlewares/authenticate.js';
import { getOrdersController } from '../controllers/orders.js';

const router = Router();

router.use(authenticate);

router.get(
  '/orders',

  ctrlWrapper(getOrdersController),
);

export default router;
