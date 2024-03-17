const express = require("express");
const users = require("../src/modules/users/routes/users.router")
const products = require("../src/modules/pets/routes/pets.router")
const clients = require("../src/modules/citas/routes/citas.router")
const quotes =  require("../src/modules/quotes/routes/quotes.router")
const usersAuth = require("../src/modules/users/routes/usersAuth.router")
const passport = require('passport')
require('../utils/auth/index')

const routers = (app) => {
  const baseRoute = express.Router();
  app.use(express.static("public"));
  app.use("/api/v1", baseRoute);
  baseRoute.use("/Userslog", usersAuth);
  baseRoute.use("/users", passport.authenticate('jwt', {session: false}), users);
  baseRoute.use("/clients", passport.authenticate('jwt', {session: false}), clients);
  baseRoute.use("/products", passport.authenticate('jwt', {session: false}), products);
  baseRoute.use("/quotes", passport.authenticate('jwt', {session: false}), quotes);
};

module.exports = routers;