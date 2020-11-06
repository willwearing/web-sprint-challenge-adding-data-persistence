const db = require("../data/db-config");

module.exports = {
  addResource(resource) {
    return db("resources")
      .insert(resource)
      .then(() => this.getResources());
  },
  getResources() {
    return db("resources").select("*");
  },
  addProject() {
    return db("projects")
      .insert(project, "id")
      .then(([id]) => this.getProjectById(id));
  },
  getProjects() {
    return db("projects").select("*");
  },
  addTask(task) {
    return db("tasks")
      .insert(task, "id")
      .then(() => this.getTasks(task.project_id));
  },
  getTasks(id) {
    return db("tasks").select("*").where({ "project_id": id }); // prettier-ignore
  },
  getProjectById(id) {
    return db("projects").where({ id }).first();
  },
};
