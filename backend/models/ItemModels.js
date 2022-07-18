const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
