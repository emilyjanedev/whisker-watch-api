import "dotenv/config";
import e from "express";
import cors from "cors";
const app = e();

const PORT = process.env.PORT || 5050;

app.use(e.json());
app.use(cors());

import petsRoutes from "./routes/pets-routes.js";

app.use("/api/pets", petsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
