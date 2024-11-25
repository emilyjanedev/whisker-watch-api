/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("sightings", (table) => {
    table.increments("id").primary();
    table
      .integer("pet_id")
      .unsigned()
      .references("pets.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("note").notNullable();
    table.float("lng").notNullable();
    table.float("lat").notNullable();
    table.timestamp("sighted_at").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("sightings");
}
