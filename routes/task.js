const express = require("express");
const taskController = require("../controllers/taskController");
const auth = require("../middleware/auth");
const router = express.Router();

//router.get("/list",auth, taskController.list);
router.get("/list", taskController.list);
router.post("/create", taskController.create);
router.get("/list/:taskId", taskController.taskById);
router.put("/:taskId", taskController.update);
router.delete("/:taskId", taskController.remove);

module.exports = router;
