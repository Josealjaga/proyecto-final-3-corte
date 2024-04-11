import express from "express";
import {getAllClients, getById, createClients, updateClients, deleteClients} from"../services/clients.service.js"
import { validateAdmin } from "../../auth/middlewares/auth.middleware.js";
const router = express.Router();

router.get("/all", getAllClients);

router.get("/byid/:id", getById);

router.post("/create", createClients);

router.put("/update", updateClients);

router.delete("/delete/:id", validateAdmin, deleteClients);


export  default router;