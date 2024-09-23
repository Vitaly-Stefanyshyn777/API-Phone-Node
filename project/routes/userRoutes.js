const express = require("express");
const router = express.Router();

// Маршрут для отримання всіх користувачів
router.get("/", (req, res) => {
  res.json({ message: "Список користувачів" });
});

module.exports = router;
