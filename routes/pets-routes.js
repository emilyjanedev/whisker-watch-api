import e from "express";
import { upload } from "../middleware/upload.js";
const router = e.Router();
import * as petsController from "../controllers/pets-controller.js";

router
  .route("/")
  .get(petsController.getPetsList)
  .post(upload.single("pet_image"), petsController.addPet);

router
  .route("/:id")
  .get(petsController.getPetById)
  .delete(petsController.deletePet);

router
  .route("/:id/sightings")
  .get(petsController.getPetSightings)
  .post(petsController.addPetSighting);

export default router;
