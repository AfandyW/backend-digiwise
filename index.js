import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routeQuestion from "./src/routes/questionRoute.js";
import routeLevel from "./src/routes/level.js";
import routeUser from "./src/routes/user.js";

import { connectDB } from "./src/utils/db.js";

dotenv.config();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.use("/quiz", routeQuestion);
app.use("/levels", routeLevel);
app.use("/users", routeUser);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
});
