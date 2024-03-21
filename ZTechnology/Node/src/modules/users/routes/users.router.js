import express from "express";
import {getAllUsers, getById, createUsers, updateUsers, deleteUsers, authUsers} from"../services/users.service.js"
const router = express.Router();

router.get("/all", getAllUsers);

router.get("/byid/:id", getById);

router.post("/create", createUsers);

router.put("/update", updateUsers);

router.delete("/delete", deleteUsers);

router.post("/auth", authUsers);

export  default router;