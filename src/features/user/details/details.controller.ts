import { Request, Response } from 'express';
import { validateBody } from './details.validator';
import { PageObjects } from '../../../shared/types';
import { mapBodyToPageObject } from '../../../shared/utils';
import { PERSONAL_DETAILS_KEY } from '../../../shared/keys';

const viewFile = 'user/details/views/index.njk';

const get = (req: Request, res: Response) => {
  if (req.session) {
    let pageObjects = { };
    if (req.session[PERSONAL_DETAILS_KEY] && req.session[PERSONAL_DETAILS_KEY].pageObjects) {
      pageObjects = req.session[PERSONAL_DETAILS_KEY].pageObjects;
    }
    return res.render(viewFile, { ...pageObjects, ButtonAction: PERSONAL_DETAILS_KEY });
  }
};

const post = (req: Request, res: Response) => {
  const { body } = req;

  const pageObjects: PageObjects = {
    firstName: {
      value: '',
      label: 'First name',
      errorMessage: false,
    },
    lastName: {
      value: '',
      label: 'Last name',
      errorMessage: false,
    },
  };

  const pageObjectWithValue: PageObjects = mapBodyToPageObject(body, pageObjects);
  const { validatedPageObjects, summaryErrors } = validateBody(pageObjectWithValue, body);

  if (summaryErrors.length > 0) {
    return res.render(viewFile, { ...validatedPageObjects, summaryErrors });
  }

  if (req.session) {
    req.session[PERSONAL_DETAILS_KEY] = { pageObjects: pageObjectWithValue };
    return res.redirect('/check-answers');
  }


};

export {
  get,
  post,
};
