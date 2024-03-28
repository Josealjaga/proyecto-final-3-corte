import express from "express"
import {
  getAllUsers,
  getById,
  createUsers,
  updateUsers,
  deleteUsers
} from "../services/users.service.js"
import { validateAdmin } from "../../auth/middlewares/auth.middleware.js"
const router = express.Router()

router.get("/all", validateAdmin, getAllUsers)

router.get("/byid/:id", validateAdmin, getById)

router.post("/create", createUsers)

router.put("/update", validateAdmin, updateUsers)

router.delete("/delete", validateAdmin, deleteUsers)

export default router
