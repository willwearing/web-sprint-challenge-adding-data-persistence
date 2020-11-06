const express = require("express");
const projectsModel = require("./projects-model");
const Project = require("./projects-model");
const router = express.Router();
router.get("/", (req, res) => {
  Project.getProjects(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Projects list" });
    });
});
router.get("/resources", (req, res) => {
  Project.getResources()
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get Resources" });
    });
});
router.get("/:id/tasks", (req, res) => {
  Project.getTasks(req.params.id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});
router.get("/:id", (req, res) => {
  Project.getProjectById(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get project " });
    });
});
router.post("/resources", (req, res) => {
  Project.addResource(req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});
router.post("/:id/tasks", (req, res) => {
  const newTask = { project_id: req.params.id, ...req.body };
  Project.addTask(newTask)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});
module.exports = router;
