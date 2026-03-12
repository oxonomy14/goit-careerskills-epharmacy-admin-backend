// src/db/models/transaction.js

import { Schema, model } from 'mongoose';

const transactionsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    type: {
      type: String,
      required: true,
      enum: ['Income', 'Expense'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const TransactionsCollection = model('transactions', transactionsSchema);
