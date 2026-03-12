// src/services/dashboard.js

import { ProductsCollection } from '../db/models/product.js';
import { SuppliersCollection } from '../db/models/supplier.js';
import { CustomersCollection } from '../db/models/customer.js';
import { TransactionsCollection } from '../db/models/transaction.js';

export const getDashboardData = async () => {
  const [
    productsCount,
    suppliersCount,
    customersCount,
    lastCustomers,
    transactions,
  ] = await Promise.all([
    ProductsCollection.countDocuments(),

    SuppliersCollection.countDocuments(),

    CustomersCollection.countDocuments(),

    CustomersCollection.find().limit(5).select('name email spent address'),

    TransactionsCollection.find().limit(6).select('name amount type'),
  ]);

  return {
    statistics: {
      allProducts: productsCount,
      allSuppliers: suppliersCount,
      allCustomers: customersCount,
    },
    lastCustomers,
    transactions,
  };
};
