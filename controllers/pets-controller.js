import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getPetsList = async (req, res) => {
  try {
    const data = await knex("pets");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: `Error retrieving pets list: ${error}` });
  }
};

export { getPetsList };
