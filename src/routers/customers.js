// src/routers/customers.js

import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
/* import { createCustomerSchema } from '../validation/customers.js'; */
import { isValidId } from '../middlewares/isValidId.js';

import {
  getCustomersController,
  getCustomerByIdController,
} from '../controllers/customers.js';

const router = Router();

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
