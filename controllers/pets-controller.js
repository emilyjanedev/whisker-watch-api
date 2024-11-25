import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getPetsList = async (_req, res) => {
  try {
    const data = await knex("pets");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: `Error retrieving pets list: ${error}` });
  }
};

const getPetById = async (req, res) => {
  try {
    const pet = await knex("pets").where({ id: req.params.id }).first();
    if (!pet) {
      return res
        .status(400)
        .json({ message: `Error retrieving pet: ${error}` });
    }
    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ message: `Unable to retrieve pet data: ${error}` });
  }
};

const getPetSightings = async (req, res) => {
  try {
    const sightings = await knex("sightings").where({ pet_id: req.params.id });
    res.status(200).json(sightings);
  } catch (error) {
    res.status(400).json({
      message: `Unable to retrieve sightings for pet id ${req.params.id}`,
    });
  }
};

const addPetSighting = async (req, res) => {
  const newSighting = req.body;
  newSighting.sighted_at = new Date(newSighting.sighted_at);

  try {
    const result = await knex("sightings").insert(newSighting);

    const newSightingId = result[0];
    const createdSighting = await knex("sightings").where({
      id: newSightingId,
    });

    res.status(201).json(createdSighting[0]);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new pet sighting: ${error}`,
    });
  }
};

const addPet = async (req, res) => {
  const {
    pet_name,
    pet_type,
    lat,
    lng,
    pet_age,
    description,
    pet_temperament,
    missing_since,
    pet_size,
    contact_name,
    contact_email,
  } = req.body;
  const fileData = req.file;

  const newPet = {
    user_id: 1,
    pet_image: `http://localhost:8080/images/${fileData.filename}`,
    status: "lost",
    pet_name,
    pet_type,
    lng,
    lat,
    pet_age,
    pet_temperament,
    missing_since: new Date(missing_since),
    pet_size,
    description,
    contact_name,
    contact_email,
  };

  try {
    const result = await knex("pets").insert(newPet);

    const newPetId = result[0];
    const createdPet = await knex("pets").where({ id: newPetId });

    res.status(201).json(createdPet[0]);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new pet: ${error}`,
    });
  }
};

export { getPetsList, getPetById, getPetSightings, addPetSighting, addPet };
