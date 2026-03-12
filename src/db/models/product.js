// src/db/models/product.js

import { Schema, model } from 'mongoose';

const productsSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    suppliers: {
      type: String,
      required: true,
      trim: true,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
      enum: ['Medicine', 'Heart', 'Head', 'Hand', 'Leg', 'Other'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductsCollection = model('products', productsSchema);
