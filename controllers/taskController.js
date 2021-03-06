const Task = require("../models/Task");

//[HttPost]
exports.create = async (req, res) => {
  const { name, description, uid, date } = req.body;

  let task = new Task({
    name,
    description,
    uid,
    date: new Date()
  });

  try {
    task = await task.save();
    res.send(task);
  } catch (err) {
    res.status(500).send(err.message);
    console.log("Error: " + err.message);
  }
};

//[HtppGet]
exports.list = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ date: -1 });

    res.json(tasks);
  } catch (err) {
    res.status(500).send(err.message);
    console.log("Error: " + err.message);
  }
};

//[HtppGet{"{id}"}]
exports.taskById = async (req, res) => {
  const tasks = await Task.findById(req.params.taskId);
  res.json(tasks);
};

//[[HttpPut("{id}")]]
exports.update = async (req, res) => {
  const { name, description, uid, date } = req.body;

  const newTask = {
    name,
    description,
    uid,
    date,
  };

  try {
    await Task.findByIdAndUpdate(req.params.taskId, newTask);
    res.json({ status: "task updated" });
  } catch (error) {
    res.status(500).send(err.message);
    console.log("Error: " + err.message);
  }
};

//[HttpDelete("{id}")]
exports.remove = async (req, res) => {
  try {
    //delereOne()
    await Task.findByIdAndRemove(req.params.taskId);
    res.json({ status: "task deleted" });
  } catch (err) {
    res.status(500).send(err.message);
    console.log("Error: " + err.message);
  }
};
