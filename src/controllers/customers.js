// src/controllers/customers.js

import { getAllCustomers, getCustomerById } from '../services/customers.js';
import createHttpError from 'http-errors';

export const getCustomersController = async (req, res) => {
  const customers = await getAllCustomers();

  res.json({
    status: 200,
    message: 'Successfully found customers!',
    data: customers,
  });
};

export const getCustomerByIdController = async (req, res) => {
  const { customerId } = req.params;
  const customer = await getCustomerById(customerId); // Відповідь, якщо контакт не знайдено
  if (!customer) {
    throw createHttpError(404, 'Customer not found');
    return;
  }

  // Відповідь, якщо контакт знайдено
  res.json({
    status: 200,
    message: `Successfully found customer with id ${customerId}!`,
    data: customer,
  });
};
