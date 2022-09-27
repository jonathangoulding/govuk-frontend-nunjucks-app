import express from "express";

import landingRouter from "../features/landing/landing.router";  
const mainRouter = (app: express.Application) => {
  app.use('/', landingRouter);
};

export {
  mainRouter
}
