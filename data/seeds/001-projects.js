exports.seed = function (knex) {
  return knex("projects").insert([
    {
      project_name: "justin passing",
      completed: 0,
      project_description: "test1",
    },
    {
      project_name: "will passing",
      completed: 0,
      project_description: "test2",
    },
    {
      project_name: "mike passing",
      completed: 0,
      project_description: "test3",
    },
  ]);
};
