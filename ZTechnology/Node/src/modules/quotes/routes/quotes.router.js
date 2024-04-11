import express from "express"
import {
  getAllQuotes,
  getById,
  createQuotes,
  updateQuotes,
  deleteQuotes
} from "../services/quotes.service.js"
const router = express.Router()

router.get("/all", getAllQuotes)

router.get("/byid/:id", getById)

router.post("/create", createQuotes)

router.put("/update", updateQuotes)

router.delete("/delete/:id", deleteQuotes)

export default router
