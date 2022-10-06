import express from 'express';
import multer from 'multer';
import { download, get, getDelete, post } from './file-upload.controller';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.get('/', get);
router.get('/:id/download', download);
router.get('/:id', getDelete);
router.post('/', upload.single('documents'), post);


export default router;
