exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("roles").insert([
    { name: "Student" },
    { name: "PM" },
    { name: "TA" }
  ]);
};


