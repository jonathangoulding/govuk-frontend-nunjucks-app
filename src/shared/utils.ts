import { PageObjects } from './types';

const mapBodyToPageObject = (body: any, pageObjects: PageObjects): PageObjects => {
  const pageObj = structuredClone(pageObjects);
  for (const key in body) {
    pageObj[key].value = body[key];
  }
  return pageObj;
};

const generateSummaryOfErrors = (pageObjects: PageObjects) => Object.keys(pageObjects)
  .map(key => pageObjects[key].errorMessage)
  .filter(error => !!error);

export {
  mapBodyToPageObject,
  generateSummaryOfErrors,
};