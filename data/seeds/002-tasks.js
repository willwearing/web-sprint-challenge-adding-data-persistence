const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

exports.seed = function (knex) {
  return knex("tasks").insert([
    {
      task_description: "do the test",
      task_notes: "notes1",
      completed: 0,
      project_id: 1,
    },
    {
      task_description: "do the sprint",
      task_notes: "notes2",
      completed: 0,
      project_id: 1,
    },
    {
      task_description: "mike getting on it",
      task_notes: "notes3",
      completed: 0,
      project_id: 1,
    },
  ]);
};
