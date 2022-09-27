import express from "express";
import nunjucks from "nunjucks";
import path from "path";

export = (app: express.Application) => {
  nunjucks.configure(
    [
      path.join(`${__dirname}/../views`),
      path.join(`${__dirname}/../features`),
      path.join(`${__dirname}/../../node_modules/govuk-frontend/`),
    ],
    {
      autoescape: true,
      express: app,
    }
  );
};
