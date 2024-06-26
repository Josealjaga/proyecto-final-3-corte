import express from "express"
import users from "../src/modules/users/routes/users.router.js"
import products from "../src/modules/products/routes/products.router.js"
import clients from "../src/modules/clients/routes/clients.router.js"
import quotes from "../src/modules/quotes/routes/quotes.router.js"
import quotesDetail from "../src/modules/quotes_detail/routes/quotesDetail.router.js"
import { validateAdmin } from "../src/modules/auth/middlewares/auth.middleware.js"
import { authUsers } from "../src/modules/auth/services/auth.service.js"
// import index from '../utils/auth/index'

const routers = (app) => {
  const baseRoute = express.Router()
  app.use(express.static("public"))
  app.use("/api/v1", baseRoute)
  baseRoute.use("/userslog", authUsers)
  baseRoute.use("/users", validateAdmin, users)
  baseRoute.use("/clients", validateAdmin, clients)
  baseRoute.use("/products", validateAdmin, products)
  baseRoute.use("/quotes", validateAdmin, quotes)
  baseRoute.use("/quotesDetail", validateAdmin, quotesDetail)
}

export default routers
