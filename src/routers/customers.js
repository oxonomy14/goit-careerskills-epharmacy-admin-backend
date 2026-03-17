// src/routers/customers.js

import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';
import {
  getCustomersController,
  getCustomerByIdController,
} from '../controllers/customers.js';

const router = Router();

router.use(authenticate);

router.get(
  '/customers',

  ctrlWrapper(getCustomersController),
);
router.get(
  '/customers/:customerId',
  isValidId,
  ctrlWrapper(getCustomerByIdController),
);

export default router;
