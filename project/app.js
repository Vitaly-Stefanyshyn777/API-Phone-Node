// // Імпорт бібліотеки Express та CORS
// require("dotenv").config(); // Підключаємо dotenv на самому початку
// const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");

// const app = express(); // Спершу створюємо app

// // Підключення логування через Morgan
// app.use(morgan("dev"));

// // Підключення CORS для дозволу запитів з інших доменів
// app.use(cors());

// // Middleware для обробки JSON і даних з форм
// app.use(express.json()); // Для обробки JSON
// app.use(express.urlencoded({ extended: true })); // Для обробки даних з форм

// // Вказуємо порт
// const PORT = process.env.PORT || 3000;

// // Проста головна сторінка
// app.get("/", (req, res) => {
//   res.send("Вітаю на моєму сервері на Express!");
// });

// // Маршрут для API, що повертає JSON
// app.get("/api/data", (req, res) => {
//   res.json({ message: "Дані з API" });
// });

// // Обробка POST-запиту на маршрут /api/data
// app.post("/api/data", (req, res) => {
//   const receivedData = req.body;
//   res.json({ message: "Дані отримано", data: receivedData });
// });

// // Імпорт маршрутів користувачів
// const userRoutes = require("./routes/userRoutes");
// app.use("/api/users", userRoutes);

// // Імпорт нового маршруту для смартфонів
// const smartphoneRoutes = require("./routes/smartphoneRoutes");
// app.use("/api/smartphones", smartphoneRoutes); // Тепер тут є маршрут для смартфонів

// // Запуск сервера
// app.listen(PORT, () => {
//   console.log(`Сервер працює на http://localhost:${PORT}`);
// });

// // Обробка неіснуючих маршрутів
// app.use((req, res, next) => {
//   res.status(404).json({ message: "Маршрут не знайдено" });
// });

// // Обробка помилок
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Внутрішня помилка сервера" });
// });


// Імпорт бібліотеки Express та CORS
require("dotenv").config(); // Підключаємо dotenv на самому початку
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express(); // Спершу створюємо app

// Підключення логування через Morgan
app.use(morgan("dev"));

// Підключення CORS для дозволу запитів з інших доменів
app.use(cors());

// Middleware для обробки JSON і даних з форм
app.use(express.json()); // Для обробки JSON
app.use(express.urlencoded({ extended: true })); // Для обробки даних з форм

// Функція для очищення кешу
const clearCache = (req, res, next) => {
  // Тут можна додати вашу логіку очищення кешу
  // Наприклад, якщо кеш зберігається в об'єкті або базі даних, очистіть відповідні записи
  // Якщо використовується Redis або інший механізм кешування, додайте відповідний код

  console.log("Кеш очищено"); // Виводимо повідомлення в консоль
  next(); // Продовжуємо виконання наступних middleware
};

// Вказуємо порт
const PORT = process.env.PORT || 3000;

// Проста головна сторінка
app.get("/", clearCache, (req, res) => {
  res.send("Вітаю на моєму сервері на Express!");
});

// Маршрут для API, що повертає JSON
app.get("/api/data", clearCache, (req, res) => {
  res.json({ message: "Дані з API" });
});

// Обробка POST-запиту на маршрут /api/data
app.post("/api/data", clearCache, (req, res) => {
  const receivedData = req.body;
  res.json({ message: "Дані отримано", data: receivedData });
});

// Імпорт маршрутів користувачів
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", clearCache, userRoutes);

// Імпорт нового маршруту для смартфонів
const smartphoneRoutes = require("./routes/smartphoneRoutes");
app.use("/api/smartphones", clearCache, smartphoneRoutes); // Тепер тут є маршрут для смартфонів

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});

// Обробка неіснуючих маршрутів
app.use((req, res, next) => {
  res.status(404).json({ message: "Маршрут не знайдено" });
});

// Обробка помилок
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Внутрішня помилка сервера" });
});
