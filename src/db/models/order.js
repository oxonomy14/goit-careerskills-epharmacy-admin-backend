// src/db/models/order.js

import { model, Schema } from 'mongoose';

const ordersSchema = new Schema(
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
    address: {
      type: String,
      required: true,
      trim: true,
    },

    products: {
      type: Number,
    },

    price: {
      type: Number,
    },

    status: {
      type: String,
      trim: true,
    },

    order_date: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const OrdersCollection = model('orders', ordersSchema);
