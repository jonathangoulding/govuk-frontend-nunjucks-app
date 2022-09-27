import express from "express";
import path from "path";

export = (app: express.Application) => {
  app.use("/assets", express.static(path.join(__dirname, "../../static")));
  app.use(
    "/assets/govuk/all.js",
    express.static(
      path.join(__dirname, "../../node_modules/govuk-frontend/govuk/all.js")
    )
  );
  // Load images/ fonts/
  app.use(
    "/assets/govuk/",
    express.static(
      path.join(__dirname, "../../node_modules/govuk-frontend/govuk/assets/")
    )
  );
};
