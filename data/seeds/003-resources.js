exports.seed = function (knex) {
  return knex("resources").insert([
    {
      resource_name: "do some work",
      resource_description: "test1",
    },
    {
      resource_name: "take good notes",
      resource_description: "test2",
    },
    {
      resource_name: "pair program",
      resource_description: "test3",
    },
  ]);
};
