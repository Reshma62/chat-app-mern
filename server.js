const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const Routes = require(`./routes`);
const connectDb = require("./config/connectDb");
app.use(express.json()); // Middleware para parsear el body de las peticiones en formato JSON
//
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

//
app.use(Routes);

// root layout
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(1010, async () => {
  await connectDb();
  console.log("server is running");
});
