import express from "express"
import users from "../src/modules/users/routes/users.router.js"
import products from "../src/modules/products/routes/products.router.js"
import clients from "../src/modules/clients/routes/clients.router.js"
import quotes from "../src/modules/quotes/routes/quotes.router.js"
import quotesDetail from "../src/modules/quotes_detail/routes/quotesDetail.router.js"
import authUsers from "../src/modules/users/routes/users.router.js"
import passport from 'passport'
// import index from '../utils/auth/index'

const routers = (app) => {
  const baseRoute = express.Router();
  app.use(express.static("public"));
  app.use("/api/v1", baseRoute);
  baseRoute.use("/userslog", authUsers);
  baseRoute.use("/users", users);
  baseRoute.use("/clients", clients)
  baseRoute.use("/products", products);
  baseRoute.use("/quotes", quotes);
  baseRoute.use("/quotesDetail", quotesDetail);
};

export default routers;