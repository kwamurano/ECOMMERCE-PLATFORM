const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { user, items, total } = req.body;
    const newOrder = new Order({ user, items, total });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
