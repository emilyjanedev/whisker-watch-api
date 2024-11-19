/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("pets", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("pet_image").notNullable();
    table.string("status").notNullable();
    table.string("pet_name").notNullable();
    table.string("pet_type").notNullable();
    table.integer("pet_age").notNullable();
    table.string("description").notNullable();
    table.decimal("longitude").notNullable();
    table.decimal("latitude").notNullable();
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
  return knex.schema.dropTable("pets");
}