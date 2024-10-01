const express = require("express");
const router = express.Router();
const { getSmartphones } = require("../controllers/smartphoneController");

// Маршрут для отримання смартфонів з фільтрацією та пагінацією
router.get("/", getSmartphones); // Тепер тут базовий шлях

module.exports = router;

