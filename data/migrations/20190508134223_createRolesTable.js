//changes to database
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', function(tbl){
    //primary key called id, integer, auto-increment
    tbl.increments();

    tbl
    .string('name', 128) //will generate a varchar 128 by default
    .notNullable() //make required
    .unique() //add a unique constraint

    tbl.timestamps(true, true); //captures timestamp when new record created
  }) 
};


//undo changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
