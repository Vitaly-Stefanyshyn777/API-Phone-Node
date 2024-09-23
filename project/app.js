// Імпорт бібліотеки Express та CORS
const express = require("express");
const cors = require("cors");
const app = express();

// Підключення CORS для дозволу запитів з інших доменів
app.use(cors());

// Middleware для обробки JSON і даних з форм
app.use(express.json()); // Для обробки JSON
app.use(express.urlencoded({ extended: true })); // Для обробки даних з форм

// Вказуємо порт
const PORT = process.env.PORT || 3000;

// Проста головна сторінка
app.get("/", (req, res) => {
  res.send("Вітаю на моєму сервері на Express!");
});

// Маршрут для API, що повертає JSON
app.get("/api/data", (req, res) => {
  res.json({ message: "Дані з API" });
});

// Обробка POST-запиту на маршрут /api/data
app.post("/api/data", (req, res) => {
  const receivedData = req.body;
  res.json({ message: "Дані отримано", data: receivedData });
});

// Імпорт маршрутів користувачів
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Імпорт нового маршруту для смартфонів
const smartphoneRoutes = require("./routes/smartphoneRoutes");
app.use("/api/smartphones", smartphoneRoutes); // Тепер тут є маршрут для смартфонів

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});
