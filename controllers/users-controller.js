import initKnex from "knex";
import configuration from "../knexfile.js";
import { validateRequest } from "../utils/validateRequest.js";
const knex = initKnex(configuration);

const getUsersList = async (_req, res) => {
  try {
    const usersList = await knex("users");
    res.status(200).json(usersList);
  } catch (error) {
    res.status(500).json({ message: "Could not get users list." });
  }
};

const addUser = async (req, res) => {
  const { result, message } = validateRequest(req.body);
  if (!result) {
    return res.status(400).json({ message: message });
  }

  const newUser = req.body;

  try {
    await knex("users").insert(newUser);
    const createdUser = await knex("users").where({ id: newUser.id }).first();
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({
      message: `Unable to add new user: ${error}`,
    });
  }
};

export { getUsersList, addUser };