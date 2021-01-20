require("dotenv").config({ path: "./config.env" });
const cors = require("cors");
require("./models/User");
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/products", require("./routes/productsRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/private", require("./routes/privateRoutes"));
app.use("/api/stripe", require("./routes/paymentRoutes"));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("E-Kars Server has started on PORT 5000");
});