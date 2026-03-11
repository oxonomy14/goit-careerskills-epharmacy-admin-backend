// src/middlewares/isValidId.js

import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { customerId } = req.params;
  if (!isValidObjectId(customerId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};
