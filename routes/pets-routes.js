import e from "express";
import { upload } from "../middleware/upload.js";
const router = e.Router();
import * as petsController from "../controllers/pets-controller.js";

router
  .route("/")
  .get(petsController.getPetsList)
  .post(upload.single("pet_image"), petsController.addPet);

router.route("/:id").get(petsController.getPetById);

export default router;
