import express from "express";
import {getAllClients, getById, createClients, updateClients, deleteClients} from"../services/clients.service.js"
const router = express.Router();

router.get("/all", getAllClients);

router.get("/byid/:id", getById);

router.post("/create", createClients);

router.put("/update", updateClients);

router.delete("/delete", deleteClients);


export  default router;