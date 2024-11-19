import e from "express";
const router = e.Router();
import * as petsController from "../controllers/pets-controller.js";

router.route("/").get(petsController.getPetsList);

export default router;
