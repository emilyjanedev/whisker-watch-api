/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      id: "jJNQLjADdLblIvGXk8dpJvOtOS22",
      user_name: "Zak",
      user_email: "zak@gmail.com",
    },
    {
      id: "k6oPVvVOV1g4EWgDCwDoDRcdAWF3",
      user_name: "Emily",
      user_email: "ejschur@gmail.com",
    },
    {
      id: "9iVCNJjSEPVwqnnsvjdVE8Besqa2",
      user_name: "Jane",
      user_email: "jane@gmail.com",
    },
  ]);
}
