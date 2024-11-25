/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("sightings").del();
  await knex("sightings").insert([
    {
      pet_id: 1,
      note: "Spotted running near the park.",
      lng: -123.0165,
      lat: 49.2501,
      sighted_at: "2024-11-22 14:30:00",
    },
    {
      pet_id: 1,
      note: "Seen chasing a ball by a jogger.",
      lng: -123.0147,
      lat: 49.2495,
      sighted_at: "2024-11-23 09:15:00",
    },
    {
      pet_id: 2,
      note: "Hiding under a car in an alley.",
      lng: -123.0728,
      lat: 49.264,
      sighted_at: "2024-11-21 18:45:00",
    },
    {
      pet_id: 2,
      note: "Observed climbing a fence near a backyard.",
      lng: -123.0739,
      lat: 49.2645,
      sighted_at: "2024-11-22 10:30:00",
    },
    {
      pet_id: 4,
      note: "Lounging on a bench at the park.",
      lng: -123.1145,
      lat: 49.2781,
      sighted_at: "2024-11-21 13:00:00",
    },
    {
      pet_id: 4,
      note: "Playing with some kids on the street.",
      lng: -123.115,
      lat: 49.2788,
      sighted_at: "2024-11-22 15:45:00",
    },
    {
      pet_id: 3,
      note: "Guarding a nearby store entrance.",
      lng: -123.1215,
      lat: 49.2825,
      sighted_at: "2024-11-21 12:15:00",
    },
    {
      pet_id: 5,
      note: "Seen swimming in a community pool area.",
      lng: -123.0649,
      lat: 49.285,
      sighted_at: "2024-11-21 16:00:00",
    },
    {
      pet_id: 5,
      note: "Walking with a group of people.",
      lng: -123.0652,
      lat: 49.2848,
      sighted_at: "2024-11-22 11:30:00",
    },
  ]);
}
