import "dotenv/config";
import e from "express";
import cors from "cors";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/firebase.js";
const app = e();
initializeApp(firebaseConfig);

const PORT = process.env.PORT || 5050;

app.use(e.json());
app.use(cors());
app.use(e.static("public"));

import petsRoutes from "./routes/pets-routes.js";
import usersRoutes from "./routes/users-routes.js";

app.use("/api/pets", petsRoutes);
app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
