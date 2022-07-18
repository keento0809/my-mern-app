const { default: mongoose } = require("mongoose");
const Item = require("../models/ItemModels");

// GET all requests
const getAllItem = async (req, res) => {
  try {
    // original
    // const allItems = await Item.find({}).sort({ created: -1 });
    const allItems = await Item.find({}).sort({ _id: -1 });
    res.status(200).json(allItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserItem = async (req, res) => {
  const { id } = req.params;
  try {
    const userItems = await Item.find({ _id: id }).sort({
      _id: -1,
    });
    res.status(200).json(userItems.length > 0 ? userItems : "");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postItem = async (req, res) => {
  if (!req.body.itemName || !req.body.amount) {
    res.status(400);
    throw Error("Invalid request");
  }
  try {
    const newItem = await Item.create({
      itemName: req.body.itemName,
      amount: req.body.amount,
      category: req.body.category,
      description: req.body.description ? req.body.description : "",
    });
    res.status(200).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No item found" });
    }
    const item = await Item.findByIdAndUpdate({ _id: id }, { ...req.body });

    if (!item) {
      return res.status(400).json({ error: "No item found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const reset = async (req, res) => {
  try {
    const allItems = await Item.deleteMany({});

    if (!allItems) {
      return res.status(400).json({ error: "Items not exist" });
    }

    res.status(200).json(allItems);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No item found" });
    }
    const item = await Item.findByIdAndDelete({ _id: id });

    if (!item) {
      return res.status(400).json({ error: "No item found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllItem,
  getUserItem,
  getOneItem,
  postItem,
  updateItem,
  deleteItem,
  reset,
};
