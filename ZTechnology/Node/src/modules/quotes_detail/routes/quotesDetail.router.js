import express from "express";
import {getAllQuotesDetail, getById, createQuotesDetail, updateQuotesDetail, deleteQuotesDetail} from"../services/quotesDetail.service.js"
const router = express.Router();

router.get("/all", getAllQuotesDetail);

router.get("/byid/:id", getById);

router.post("/create", createQuotesDetail);

router.put("/update", updateQuotesDetail);

router.delete("/delete", deleteQuotesDetail);


export  default router;