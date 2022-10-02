import { Request, Response } from 'express';
import { PERSONAL_DETAILS_KEY } from '../../shared/keys';

const get = (req: Request, res: Response) => res.render('landing/views/index.njk', { ButtonAction: PERSONAL_DETAILS_KEY });

export {
  get,
};
