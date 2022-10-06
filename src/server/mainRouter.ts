import express from 'express';

import landingRouter from '../features/landing/landing.router';  
import userDetailsRouter from '../features/user/details/details.router';  
import checkAnswersRouter from '../features/check-answers/check-answers.router';  
import { PERSONAL_DETAILS_KEY } from '../shared/keys';
import fileUploadRouter from '../features/file-upload/file-upload.router';
const mainRouter = (app: express.Application) => {
  app.use('/', landingRouter);
  app.use('/' + PERSONAL_DETAILS_KEY, userDetailsRouter);
  app.use('/check-answers', checkAnswersRouter);
  app.use('/file-upload', fileUploadRouter);
};

export {
  mainRouter,
};

