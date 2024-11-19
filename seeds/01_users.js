/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      user_name: "Alice Johnson",
      user_email: "alice.johnson@example.com",
      created_at: "2024-11-15 09:00:00",
      updated_at: "2024-11-15 09:00:00",
    },
    {
      id: 2,
      user_name: "Bob Smith",
      user_email: "bob.smith@example.com",
      created_at: "2024-11-16 10:30:00",
      updated_at: "2024-11-16 10:30:00",
    },
    {
      id: 3,
      user_name: "Charlie Brown",
      user_email: "charlie.brown@example.com",
      created_at: "2024-11-17 12:15:00",
      updated_at: "2024-11-17 12:15:00",
    },
    {
      id: 4,
      user_name: "Diana Prince",
      user_email: "diana.prince@example.com",
      created_at: "2024-11-18 14:45:00",
      updated_at: "2024-11-18 14:45:00",
    },
    {
      id: 5,
      user_name: "Ethan Hunt",
      user_email: "ethan.hunt@example.com",
      created_at: "2024-11-19 16:00:00",
      updated_at: "2024-11-19 16:00:00",
    },
  ]);
}
