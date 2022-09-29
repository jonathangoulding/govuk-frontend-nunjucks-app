import { PageObjects } from '../../../shared/types';
import { generateSummaryOfErrors } from '../../../shared/utils';


const addErrorsToPageObjectIfPresent = (pageObjects: PageObjects, body: { firstName: string; lastName: string; }) => {
  const validatePageObject = structuredClone(pageObjects);
  if (body.firstName === '') {
    validatePageObject.firstName.errorMessage = { text: 'First name is required', href: '#firstName' };
  }
  if (body.lastName === '') {
    validatePageObject.lastName.errorMessage = { text: 'Last name is required', href: '#lastName' };
  }
  return validatePageObject;
};

const validateBody = (pageObjects: PageObjects, body: { firstName: string; lastName: string; }) => {
  const validatedPageObjects: PageObjects = addErrorsToPageObjectIfPresent(pageObjects, body);
  const summaryErrors = generateSummaryOfErrors(validatedPageObjects);

  return {
    validatedPageObjects,
    summaryErrors,
  };
};

export {
  validateBody,
};