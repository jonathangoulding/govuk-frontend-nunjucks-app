import { Request, Response } from 'express';

const get = (req: Request, res: Response) => res.render('landing/views/index.njk');

export {
  get,
};
