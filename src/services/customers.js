// src/services/customers.js
import { CustomersCollection } from '../db/models/customer.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllCustomers = async ({ page, perPage, name }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const filter = {};

  if (name?.trim()) {
    filter.name = { $regex: name.trim(), $options: 'i' };
  }

  const customersQuery = CustomersCollection.find(filter);
  const customersCount = await CustomersCollection.find(filter)
    .merge(customersQuery)
    .countDocuments();

  const customers = await customersQuery.skip(skip).limit(limit).exec();
  const paginationData = calculatePaginationData(customersCount, perPage, page);
  return {
    data: customers,
    ...paginationData,
  };
};

export const getCustomerById = async (customerId) => {
  const customer = await CustomersCollection.findById(customerId);
  return customer;
};
