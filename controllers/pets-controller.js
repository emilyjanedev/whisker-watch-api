import initKnex from "knex";
import configuration from "../knexfile.js";
import { offsetMarkers } from "../utils/offsetMarkers.js";
import { validateRequest } from "../utils/validateRequest.js";
const knex = initKnex(configuration);

const getPetsList = async (req, res) => {
  const { user_id } = req.query;

  try {
    let data;

    if (user_id) {
      const response = await knex("pets").where({ user_id: user_id });
      data = response;
    } else {
      const response = await knex("pets");
      data = response;
    }

    const sortedData = data.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    const locationOffsetData = offsetMarkers(sortedData);
    res.status(200).json(locationOffsetData);
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
    const data = await knex("sightings")
      .join("users", "users.id", "sightings.user_id")
      .select(
        "sightings.id",
        "users.user_name",
        "sightings.note",
        "sightings.sighted_at",
        "sightings.city",
        "sightings.lat",
        "sightings.lng"
      )
      .where({ pet_id: req.params.id });
    const sortedData = data.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    res.status(200).json(sortedData);
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
    const createdSighting = await knex("sightings")
      .where({
        id: newSightingId,
      })
      .first();

    res.status(201).json(createdSighting);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new pet sighting: ${error}`,
    });
  }
};

const addPet = async (req, res) => {
  const { result, message } = validateRequest(req.body);
  if (!result) {
    return res.status(400).json({ message: message });
  }

  const {
    user_id,
    pet_name,
    pet_type,
    lat,
    lng,
    city,
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
    user_id,
    pet_image: `http://localhost:8080/images/${fileData.filename}`,
    status: "lost",
    pet_name,
    pet_type,
    lng,
    lat,
    city,
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
    const createdPet = await knex("pets").where({ id: newPetId }).first();

    res.status(201).json(createdPet);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new pet: ${error}`,
    });
  }
};

const deletePet = async (req, res) => {
  const petId = req.params.id;

  try {
    const rowsDeleted = await knex("pets").where({ id: petId }).delete();

    if (rowsDeleted === 0) {
      res.status(400).json({ message: `Pet with id ${petId} not found.` });
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting pet:", error);
    res.status(500).json({ message: `An error occurred: ${error.message}` });
  }
};

const updatePet = async (req, res) => {
  const { result, message } = validateRequest(req.body);
  if (!result) {
    return res.status(400).json({ message: message });
  }

  try {
    const { id, ...updateData } = req.body;
    updateData.updated_at = new Date();
    updateData.missing_since = new Date(updateData.missing_since);

    const rowsUpdated = await knex("pets").where({ id: id }).update(updateData);

    if (rowsUpdated === 0) {
      res.status(400).json({ message: `Pet with id ${id} was not found.` });
    }

    const updatedPet = await knex("pets").where({ id: id });
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: `Unable to update pet ${error}` });
  }
};

export {
  getPetsList,
  getPetById,
  getPetSightings,
  addPetSighting,
  addPet,
  deletePet,
  updatePet,
};
