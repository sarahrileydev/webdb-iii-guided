
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(tbl) {
    tbl.increments();

    tbl.string('name', 128).notNullable();

    tbl //foreign key
    .integer('role_id')//..
    .unsigned() //include this because some db ms need it
    .references('id')//primary key in the parent table
    .inTable('roles')//the name of the parent table
    .onDelete('CASCADE') //delete joined child ids as well
    .onUpdate('CASCADE')

    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
