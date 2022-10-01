import { Request, Response } from 'express';
import { validateBody } from './details.validator';
import { PageObjects } from '../../../shared/types';
import { mapBodyToPageObject } from '../../../shared/utils';

const sessionKey = 'user-details';
const viewFile = 'user/details/views/index.njk';

const get = (req: Request, res: Response) => {
  if (req.session) {
    let pageObjects = { };
    if (req.session[sessionKey] && req.session['user-details'].pageObjects) {
      pageObjects = structuredClone(req.session['user-details'].pageObjects);
    }
    return res.render(viewFile, { ...pageObjects });
  }
};

const post = (req: Request, res: Response) => {
  const { body } = req;

  const pageObjects: PageObjects = {
    firstName: {
      value: '',
      errorMessage: false,
    },
    lastName: {
      value: '',
      errorMessage: false,
    },
  };

  const pageObjectWithValue: PageObjects = mapBodyToPageObject(body, pageObjects);
  const { validatedPageObjects, summaryErrors } = validateBody(pageObjectWithValue, body);

  //  will commit values with errors
  if (req.session) req.session[sessionKey] = { pageObjects: pageObjectWithValue };

  if (summaryErrors.length > 0) {
    return res.render(viewFile, { ...validatedPageObjects, summaryErrors });
  }
  return res.redirect('/');
};

export {
  get,
  post,
};
