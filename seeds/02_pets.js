/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("pets").del();
  await knex("pets").insert([
    {
      user_id: 1,
      pet_image: "https://example.com/images/pet6.jpg",
      status: "lost",
      pet_name: "Rocky",
      pet_type: "Dog",
      lng: -123.0152,
      lat: 49.2497,
      city: "North Vancouver",
      pet_age: 4,
      pet_temperament: "energetic",
      missing_since: "2024-11-20",
      pet_size: "m",
      description: "Greyhound with a sleek coat. Loves to run and chase balls.",
      contact_name: "Carlos Gutierrez",
      contact_email: "carlosg@example.com",
    },
    {
      user_id: 1,
      pet_image: "https://example.com/images/pet7.jpg",
      status: "lost",
      pet_name: "Luna",
      pet_type: "Cat",
      lng: -123.0734,
      lat: 49.2643,
      city: "West Vancouver",
      pet_age: 3,
      pet_temperament: "timid",
      missing_since: "2024-11-20",
      pet_size: "s",
      description: "Black and white tuxedo cat with a distinctive mustache.",
      contact_name: "Sarah Lee",
      contact_email: "sarahlee@example.com",
    },
    {
      user_id: 1,
      pet_image: "https://example.com/images/pet8.jpg",
      status: "found",
      pet_name: "Max",
      pet_type: "Dog",
      lng: -123.121,
      lat: 49.2823,
      city: "Vancouver",
      pet_age: 2,
      pet_temperament: "protective",
      missing_since: "2024-11-20",
      pet_size: "l",
      description: "German Shepherd with a strong build and protective nature.",
      contact_name: "David Kim",
      contact_email: "davidkim@example.com",
    },
    {
      user_id: 1,
      pet_image: "https://example.com/images/pet9.jpg",
      status: "lost",
      pet_name: "Bella",
      pet_type: "Cat",
      lng: -123.1149,
      lat: 49.2784,
      city: "North Vancouver",
      pet_age: 5,
      pet_temperament: "friendly",
      missing_since: "2024-11-20",
      pet_size: "m",
      description:
        "Grey tabby cat with a soft coat. Very affectionate and loves cuddles.",
      contact_name: "Emma Turner",
      contact_email: "emmaturner@example.com",
    },
    {
      user_id: 1,
      pet_image: "https://example.com/images/pet10.jpg",
      status: "found",
      pet_name: "Oliver",
      pet_type: "Dog",
      lng: -123.0645,
      lat: 49.2851,
      city: "Vancouver",
      pet_age: 6,
      pet_temperament: "friendly",
      missing_since: "2024-11-20",
      pet_size: "l",
      description:
        "Golden Retriever with a gentle temperament. Loves swimming and being around people.",
      contact_name: "Laura Martinez",
      contact_email: "lauramartinez@example.com",
    },
  ]);
}
