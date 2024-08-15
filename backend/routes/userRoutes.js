const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, userController.getAllUsers);

router.get("/:id", authMiddleware, userController.getUserById);

module.exports = router;
