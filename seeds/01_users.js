/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: "2aOKwRsZmjXwDBkc9j4cmQUTAy02",
      user_name: "Zak",
      user_email: "zak@gmail.com",
      created_at: "2024-12-01 19:37:56",
      updated_at: "2024-12-01 19:37:56",
    },
    {
      id: "8UhkK5moosPAeVKVgpDcfvRi5zw1",
      user_name: "Jane",
      user_email: "jane@gmail.com",
      created_at: "2024-12-01 12:04:42",
      updated_at: "2024-12-01 12:04:42",
    },
    {
      id: "JjxS0CSLoEXDEPIdPYCogPh4X1Y2",
      user_name: "Emily",
      user_email: "ejschur@gmail.com",
      created_at: "2024-12-01 19:11:54",
      updated_at: "2024-12-01 19:11:54",
    },
    {
      id: "pCMhyEfAtshKzSxlF8bkpfrXzKK2",
      user_name: "Developer",
      user_email: "developer@gmail.com",
      created_at: "2024-12-01 19:22:23",
      updated_at: "2024-12-01 19:22:23",
    },
  ]);
}
