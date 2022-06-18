const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const {errorHandler, pageNotFound} = require("./middleware/error-handler")

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/products", productRoutes);

app.use(pageNotFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
