// src/db/models/supplier.js

import { Schema, model } from 'mongoose';

const suppliersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    date: {
      type: Date,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ['Active', 'Deactive'],
      default: 'Active',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const SuppliersCollection = model('suppliers', suppliersSchema);
