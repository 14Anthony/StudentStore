const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: false },
    rating: { type: Number, required: false },
    name: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },

    name: {
      type: String,
      // required: true,
    },

    image: {
      type: String,
    },

    brand: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: false,
    },
    motto: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    salary: {
      type: Number,
      // required: true,
      defaut: 0,
    },
    countInStock: {
      type: Number,
      required: false,
      defaut: 0,
    },
    review: [reviewSchema],
    rating: {
      type: Number,
      required: false,
      defaut: 0,
    },
    numReviews: {
      type: Number,
      required: false,
      defaut: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
