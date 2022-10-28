const User = require("../models/user");

// handle errors
const handleError = (err) => {
  console.log(err);
};

const login_get = (req, res) => {
  res.status(200).render("login", { title: "Login" });
};

const login_post = (req, res) => {
  res.send("Hello");
};

const signup_get = (req, res) => {
  res.status(200).render("signup", { title: "Sign up" });
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.json({ user });
  } catch (err) {
    handleError(err);
    res.json({ err });
  }
};

module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
};
