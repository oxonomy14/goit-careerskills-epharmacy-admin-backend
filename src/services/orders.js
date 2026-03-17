// src/services/orders.js
// src/services/customers.js
import { OrdersCollection } from '../db/models/order.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllOrders = async ({ page, perPage, name }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const filter = {};

  if (name?.trim()) {
    filter.name = { $regex: name.trim(), $options: 'i' };
  }

  const ordersQuery = OrdersCollection.find(filter);
  const ordersCount = await OrdersCollection.find(filter)
    .merge(ordersQuery)
    .countDocuments();

  const orders = await ordersQuery.skip(skip).limit(limit).exec();
  const paginationData = calculatePaginationData(ordersCount, perPage, page);
  return {
    data: orders,
    ...paginationData,
  };
};
