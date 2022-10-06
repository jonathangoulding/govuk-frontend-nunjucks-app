import { Request, Response } from 'express';
import { FILE_UPLOAD_KEY } from '../../shared/keys';
import * as fs from 'fs';

const viewFile = 'file-upload/views/index.njk';

const get = (req: Request, res: Response) => {
  return res.render(viewFile);
};

const download =  (req: Request, res: Response) => {
  const file = `./uploads/${req.params.id}`;
  res.download(file); // Set disposition and send it.
};

const getDelete = (req: Request, res: Response) => {
  const path = `./uploads/${req.params.id}`;
  try {
    fs.unlinkSync(path);
    if (req.session) {
      req.session[FILE_UPLOAD_KEY] = { pageObjects: false };
    }
    console.log('File is deleted: ', path);
  } catch (error) {
    console.log(error);
  }
  return res.redirect('/check-answers');
};

const post = (req: Request, res: Response) => {
  if (req.session) {
    req.session[FILE_UPLOAD_KEY] = {
      pageObjects: {
        'originalname': req.file?.originalname,
        'mimetype': req.file?.mimetype,
        'filename': req.file?.filename,
        'path': req.file?.path,
        'size': req.file?.size,
      },
    };
  }
  return res.redirect('/check-answers');
};

export {
  get,
  getDelete,
  post,
  download,
};
