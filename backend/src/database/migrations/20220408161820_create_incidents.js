
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments();

        table.string('title').notNullable(); 
        table.string('description').notNullable(); 

        table.string('perfil_id').notNullable();

        table.foreign('perfil_id').references('id').inTable('perfil');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
