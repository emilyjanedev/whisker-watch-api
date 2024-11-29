import e from "express";
import { upload } from "../middleware/upload.js";
const router = e.Router();
import * as usersController from "../controllers/users-controller.js";

router
  .route("/")
  .get(usersController.getUsersList)
  .post(usersController.addUser);

export default router;
