// src/controllers/orders.js

import { getAllOrders } from '../services/orders.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getOrdersController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { name } = req.query;
  const orders = await getAllOrders({
    page,
    perPage,
    name,
  });

  res.json({
    status: 200,
    message: 'Successfully found orders!',
    data: orders,
  });
};
