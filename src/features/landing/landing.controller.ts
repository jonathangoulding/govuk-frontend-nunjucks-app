import { Request, Response } from "express";

const get = (req: Request, res: Response) => {
  const title = 'Hello Template';
  res.render('landing/views/index.njk', { title });
}

export {
  get,
};
