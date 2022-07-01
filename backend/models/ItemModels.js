const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
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
