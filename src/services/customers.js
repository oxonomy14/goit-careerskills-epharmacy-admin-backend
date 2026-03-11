// src/services/students.js
import { CustomersCollection } from '../db/models/customer.js';

export const getAllCustomers = async () => {
  const customers = await CustomersCollection.find();
  return customers;
};

export const getCustomerById = async (customerId) => {
  const customer = await CustomersCollection.findById(customerId);
  return customer;
};
