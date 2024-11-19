import "dotenv/config";
import e from "express";
import cors from "cors";
const app = e();

const PORT = process.env.PORT || 5050;

app.use(e.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
