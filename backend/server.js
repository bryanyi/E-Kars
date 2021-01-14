require("./models/User");
require("./services/passport");
const express = require("express");
const passport = require("passport");
const cookie = require("cookie-session");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const productRoutes = require("./routes/productsRoutes");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(
  cookie({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use("/api/products", productRoutes);

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("E-Kars Server has started!");
});
