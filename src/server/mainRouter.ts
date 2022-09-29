import express from 'express';

import landingRouter from '../features/landing/landing.router';  
import userDetailsRouter from '../features/user/details/details.router';  
const mainRouter = (app: express.Application) => {
  app.use('/', landingRouter);
  app.use('/user-details', userDetailsRouter);
};

export {
  mainRouter,
};

