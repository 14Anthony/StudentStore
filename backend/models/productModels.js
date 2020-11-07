import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
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
    price: {
      type: Number,
      required: true,
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

const Products = mongoose.model("Product", productsSchema);

export default Products;
