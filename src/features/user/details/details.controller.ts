import { Request, Response } from 'express';
import { validateBody } from './details.validator';
import { PageObject, PageObjects } from '../../../shared/types';
import { mapBodyToPageObject } from '../../../shared/utils';

const firstName: PageObject = {
  id: 'firstName',
  value: '',
  errorMessage: false,
};

const lastName: PageObject = {
  id: 'lastName',
  value: '',
  errorMessage: false,
};

const pageObject: PageObjects = {
  firstName,
  lastName,
};

const renderPage = (res: Response, body: any) => {
  return res.render('user/details/views/index.njk', body);
};

const get = (req: Request, res: Response) => {
  renderPage(res, pageObject);
};

const post = (req: Request, res: Response) => {
  const { body } = req;
  const postPageObjects: PageObjects = mapBodyToPageObject(body, structuredClone(pageObject));

  const { validatedPageObjects, summaryErrors } = validateBody(postPageObjects, body);

  console.log('Summary errors: ', summaryErrors);
  
  if (summaryErrors.length > 0) {
    return renderPage(res, { ...validatedPageObjects, summaryErrors });
  }
  return res.redirect('/');
};

export {
  get,
  post,
};
