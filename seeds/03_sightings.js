/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("sightings").del();
  await knex("sightings").insert([
    {
      user_id: "9iVCNJjSEPVwqnnsvjdVE8Besqa2",
      pet_id: 2,
      note: "I saw Beans enjoying some sushi at Momiji!",
      sighted_at: "2024-11-21",
      city: "North Vancouver",
      lat: 49.32,
      lng: -122.97,
    },
    {
      user_id: "jJNQLjADdLblIvGXk8dpJvOtOS22",
      pet_id: 2,
      note: "Saw Beans at the park, even though dogs aren't allowed...",
      sighted_at: "2024-11-22",
      city: "North Vancouver",
      lat: 49.31,
      lng: -122.95,
    },
    {
      user_id: "9iVCNJjSEPVwqnnsvjdVE8Besqa2",
      pet_id: 3,
      note: "I saw Sushi enjoying the beach at Cates Park!",
      sighted_at: "2024-11-26",
      city: "North Vancouver",
      lat: 49.3,
      lng: -122.96,
    },
    {
      user_id: "jJNQLjADdLblIvGXk8dpJvOtOS22",
      pet_id: 3,
      note: "I saw Sushi getting lots of pets from the kids at Sherwood Elementary",
      sighted_at: "2024-11-25",
      city: "North Vancouver",
      lat: 49.31,
      lng: -122.96,
    },
    {
      user_id: "9iVCNJjSEPVwqnnsvjdVE8Besqa2",
      pet_id: 4,
      note: "I saw Monkey enjoying a hot coffee at United Strangers",
      sighted_at: "2024-11-24",
      city: "North Vancouver",
      lat: 49.32,
      lng: -123,
    },
    {
      user_id: "jJNQLjADdLblIvGXk8dpJvOtOS22",
      pet_id: 4,
      note: "I think I saw Monkey on my walk tonight, on Beachview...",
      sighted_at: "2024-11-25",
      city: "North Vancouver",
      lat: 49.31,
      lng: -122.95,
    },
  ]);
}
