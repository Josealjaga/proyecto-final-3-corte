import express from "express"
import {
  getAllUsers,
  getById,
  createUsers,
  updateUsers,
  deleteUsers
} from "../services/users.service.js"
const router = express.Router()

router.get("/all", getAllUsers)

router.get("/byid/:id", getById)

router.post("/create", createUsers)

router.put("/update", updateUsers)

router.delete("/delete/:id", deleteUsers)

export default router
