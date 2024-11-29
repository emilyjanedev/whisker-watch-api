/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("pets").del();
  await knex("pets").insert([
    {
      id: 1,
      user_id: "9iVCNJjSEPVwqnnsvjdVE8Besqa2",
      pet_image: "http://localhost:8080/images/img_1570.jpg",
      status: "lost",
      pet_name: "Cheeto",
      pet_type: "Cat",
      lng: -123.12,
      lat: 49.28,
      city: "Vancouver",
      pet_age: 4,
      description:
        "Cheeto somehow wandered out of my apartment, into the elevator, and onto the street! Have you seen him?",
      pet_temperament: "Protective",
      missing_since: "2024-11-22",
      pet_size: "M",
      contact_name: "Jane",
      contact_email: "jane@gmail.com",
    },
    {
      id: 2,
      user_id: "k6oPVvVOV1g4EWgDCwDoDRcdAWF3",
      pet_image:
        "http://localhost:8080/images/tumblr_450321f489aa23108d809863db1a9799_cc7bf040_1280.jpg",
      status: "lost",
      pet_name: "Beans",
      pet_type: "Dog",
      lng: -122.95,
      lat: 49.33,
      city: "North Vancouver",
      pet_age: 6,
      description:
        "Beans got out of his harness on our walk last night. He is a friendly little guy!",
      pet_temperament: "Friendly",
      missing_since: "2024-11-20",
      pet_size: "S",
      contact_name: "Emily",
      contact_email: "emily@gmail.com",
    },
    {
      id: 3,
      user_id: "k6oPVvVOV1g4EWgDCwDoDRcdAWF3",
      pet_image: "http://localhost:8080/images/images.jpeg",
      status: "lost",
      pet_name: "Sushi",
      pet_type: "Cat",
      lng: -122.95,
      lat: 49.31,
      city: "North Vancouver",
      pet_age: 3,
      description:
        "Sushi decided to dart out the door to chase a squirrel and I haven't seen him since! He is shy, but friendly!",
      pet_temperament: "Timid",
      missing_since: "2024-11-24",
      pet_size: "S",
      contact_name: "Emily",
      contact_email: "emily@gmail.com",
    },
    {
      id: 4,
      user_id: "k6oPVvVOV1g4EWgDCwDoDRcdAWF3",
      pet_image:
        "http://localhost:8080/images/funny-derpy-dogs-4-610bf8dff3ed4__700.jpg",
      status: "lost",
      pet_name: "Monkey",
      pet_type: "Dog",
      lng: -122.96,
      lat: 49.32,
      city: "North Vancouver",
      pet_age: 5,
      description:
        "Monkey got out last night! He is very friendly and will probably approach you before you approach him.",
      pet_temperament: "Friendly",
      missing_since: "2024-11-23",
      pet_size: "XS",
      contact_name: "Emily",
      contact_email: "emily@gmail.com",
    },
  ]);
}
