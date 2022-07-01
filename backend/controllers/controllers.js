const Item = require("../models/ItemModels");

// GET all requests
const getAllItem = async (req, res) => {
  try {
    const allItems = await Item.find({}).sort({ created: -1 });
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

const postItem = async (req, res) => {
  if (!req.body.itemName || !req.body.amount) {
    res.status(400);
    throw Error("Invalid request");
  }
  try {
    const newItem = await Item.create({
      itemName: req.body.itemName,
      amount: req.body.amount,
      description: req.body.description ? req.body.description : "",
    });
    res.status(200).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    res.status(200).json({ mssg: "UPDATE Item" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    res.status(200).json({ mssg: "DELETE Item" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllItem,
  getOneItem,
  postItem,
};
