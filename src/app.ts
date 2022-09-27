import express from "express";
import dotenv from "dotenv";
import configureNunjucks from "./server/configureNunjucks";
import configureStaticAssets from "./server/configureStaticAssets";
import { mainRouter } from "./server/mainRouter";

dotenv.config();

const app = express();
const port = process.env.PORT;

configureNunjucks(app);
configureStaticAssets(app);
mainRouter(app)

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
