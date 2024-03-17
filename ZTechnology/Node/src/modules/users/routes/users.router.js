const express = require("express");
const users = require("../services/users.service");
const router = express.Router();

router.get("/all", users.getAllUsers);

router.get("/byid/:id", users.getById);

router.post("/create", users.createUsers);

router.put("/update", users.updateUsers);

router.delete("/delete", users.deleteUsers);

router.post("/auth", users.authUsers);

module.exports = router;