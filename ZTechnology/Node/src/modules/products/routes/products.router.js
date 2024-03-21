import express from "express";
import {getAllProducts, getById, createProducts, updateProducts, deleteProducts} from"../services/products.service.js"
const router = express.Router();

router.get("/all", getAllProducts);

router.get("/byid/:id", getById);

router.post("/create", createProducts);

router.put("/update", updateProducts);

router.delete("/delete", deleteProducts);


export  default router;