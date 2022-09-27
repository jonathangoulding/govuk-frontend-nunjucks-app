import express from 'express';
import * as landingController from './landing.controller';

const router = express.Router();

router.get('/', landingController.get);

export default router;
