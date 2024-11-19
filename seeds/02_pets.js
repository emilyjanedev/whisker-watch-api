/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("pets").del();
  await knex("pets").insert([
    {
      id: 1,
      user_id: 1,
      pet_image: "https://example.com/images/fluffy.jpg",
      status: "lost",
      pet_name: "Fluffy",
      pet_type: "cat",
      pet_age: 3,
      description:
        "Orange tabby with white paws, very friendly but shy around strangers.",
      longitude: -123.116226,
      latitude: 49.246292,
      created_at: "2024-11-19 10:00:00",
      updated_at: "2024-11-19 10:00:00",
    },
    {
      id: 2,
      user_id: 2,
      pet_image: "https://example.com/images/buddy.jpg",
      status: "lost",
      pet_name: "Buddy",
      pet_type: "dog",
      pet_age: 5,
      description:
        "Golden Retriever wearing a blue collar, loves chasing balls.",
      longitude: -123.120735,
      latitude: 49.282729,
      created_at: "2024-11-18 15:30:00",
      updated_at: "2024-11-18 15:30:00",
    },
    {
      id: 3,
      user_id: 3,
      pet_image: "https://example.com/images/mittens.jpg",
      status: "lost",
      pet_name: "Mittens",
      pet_type: "cat",
      pet_age: 2,
      description: "Black cat with white paws and a small scar on her ear.",
      longitude: -123.11,
      latitude: 49.24,
      created_at: "2024-11-17 08:20:00",
      updated_at: "2024-11-17 08:20:00",
    },
    {
      id: 4,
      user_id: 4,
      pet_image: "https://example.com/images/rocky.jpg",
      status: "lost",
      pet_name: "Rocky",
      pet_type: "dog",
      pet_age: 6,
      description:
        "Bulldog with a brown coat and a white face, last seen near Main Street.",
      longitude: -123.13,
      latitude: 49.27,
      created_at: "2024-11-16 19:45:00",
      updated_at: "2024-11-16 19:45:00",
    },
    {
      id: 5,
      user_id: 5,
      pet_image: "https://example.com/images/luna.jpg",
      status: "lost",
      pet_name: "Luna",
      pet_type: "cat",
      pet_age: 4,
      description:
        "Gray cat with bright green eyes, very vocal and affectionate.",
      longitude: -123.14,
      latitude: 49.26,
      created_at: "2024-11-15 14:10:00",
      updated_at: "2024-11-15 14:10:00",
    },
  ]);
}
