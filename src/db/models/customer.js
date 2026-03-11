// src/db/models/customer.js

import { model, Schema } from 'mongoose';

const customersSchema = new Schema(
  {
    photo: {
      type: String,
      required: false,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    spent: {
      type: String,
    },

    phone: {
      type: String,
    },

    address: {
      type: String,
    },

    register_date: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const CustomersCollection = model('customers', customersSchema);
