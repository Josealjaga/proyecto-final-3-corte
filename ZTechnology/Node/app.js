import express from "express"
import routers from "./router/index.js"
import dotenv from "dotenv"
const app = express()
dotenv.config()
const port = 3000
app.set("port", port)

app.use(express.json())

routers(app)

app.listen(app.get("port"), (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log("Server is running on port...", port)
  }
})
