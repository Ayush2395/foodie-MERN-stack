const {
  login_get,
  login_post,
  signup_get,
  signup_post,
} = require("../controller/authController");

const routes = require("express").Router();

routes.get("/login", login_get);
routes.post("/login", login_post);
routes.get("/signup", signup_get);
routes.post("/signup", signup_post);

module.exports = routes;
