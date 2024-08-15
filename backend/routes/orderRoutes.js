const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, orderController.createOrder);

router.get("/:userId", authMiddleware, orderController.getUserOrders);

module.exports = router;
