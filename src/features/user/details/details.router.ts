import express from 'express';
import { get, post } from './details.controller';

const router = express.Router();

router.get('/', get);
router.post('/', post);

export default router;
