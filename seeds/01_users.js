/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: "f62c9e3b-6a24-4f6b-93f5-a60d3c39eeb1",
      user_name: "Alice Johnson",
      user_email: "alice.johnson@example.com",
      created_at: "2024-11-15 09:00:00",
      updated_at: "2024-11-15 09:00:00",
    },
    {
      id: "d1431a7e-89f7-4e4f-a0db-579c98ef7ba2",
      user_name: "Bob Smith",
      user_email: "bob.smith@example.com",
      created_at: "2024-11-16 10:30:00",
      updated_at: "2024-11-16 10:30:00",
    },
    {
      id: "b47cf0f4-2a01-4f34-8c76-d6a7d3c85ac7",
      user_name: "Charlie Brown",
      user_email: "charlie.brown@example.com",
      created_at: "2024-11-17 12:15:00",
      updated_at: "2024-11-17 12:15:00",
    },
    {
      id: "e514fb29-c73e-439f-9dbb-0a1fc07eae23",
      user_name: "Diana Prince",
      user_email: "diana.prince@example.com",
      created_at: "2024-11-18 14:45:00",
      updated_at: "2024-11-18 14:45:00",
    },
    {
      id: "a8c6379f-7d72-429e-9d84-b72e3b57e87b",
      user_name: "Ethan Hunt",
      user_email: "ethan.hunt@example.com",
      created_at: "2024-11-19 16:00:00",
      updated_at: "2024-11-19 16:00:00",
    },
  ]);
}
