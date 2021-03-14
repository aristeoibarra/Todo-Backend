const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router.post("/create", taskController.create);
router.get("/list", taskController.list);
router.get("/list/:taskId", taskController.taskById);
router.put("/:taskId", taskController.update);
router.delete("/:taskId", taskController.remove);

module.exports = router;
