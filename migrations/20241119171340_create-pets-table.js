/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("pets", (table) => {
    table.increments("id").primary();
    table
      .string("user_id")
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("pet_image").notNullable();
    table.string("status").notNullable();
    table.string("pet_name").notNullable();
    table.string("pet_type").notNullable();
    table.float("lng").notNullable();
    table.float("lat").notNullable();
    table.string("city").notNullable();
    table.string("address").notNullable();
    table.integer("pet_age").notNullable();
    table.string("description").notNullable();
    table.string("pet_temperament").notNullable();
    table.timestamp("missing_since").notNullable();
    table.string("pet_size").notNullable();
    table.string("contact_name").notNullable();
    table.string("contact_email").notNullable();
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
