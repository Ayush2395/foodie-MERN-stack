const express = require("express");
const routes = require("./router/authRouter");
const app = express();
const mongoose = require("mongoose");

// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// mongodb databse connection
mongoose.connect("mongodb://localhost:27017/foodie", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", () => console.log("error in connecting to database"));
db.once("open", () => console.log("database connected"));

// main route
app.get("/", (req, res) => {
  res.status(200).render("home", { title: "Foodie" });
});

// authentication routes middleware
app.use(routes);

// page not found middleware
app.use((req, res) => {
  res.status(400).render("404", { title: "Page not found" });
});

app.listen(8000, () => console.log(`server running on port 8000`));
