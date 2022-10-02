import express from 'express';
import { get } from './check-answers.controller';

const router = express.Router();

router.get('/', get);

export default router;
