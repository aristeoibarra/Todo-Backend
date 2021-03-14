//existe el user?
// crear un nuevo user
// hash password
// add user

const express = require("express");
const userController = require("../controllers/UserControler");
const router = express.Router();

router.post("/", userController.create);
router.get("/list", userController.list);

module.exports = router;
