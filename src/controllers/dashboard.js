// src/controllers/dashboard.js

import { getDashboardData } from '../services/dashboard.js';

export const getDashboardController = async (req, res) => {
  const data = await getDashboardData();

  res.json({
    status: 200,
    message: 'Dashboard data retrieved successfully',
    data,
  });
};
