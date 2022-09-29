import { PageObjects } from './types';

const mapBodyToPageObject = (body: any, pageObjects: PageObjects): PageObjects => {
  const pageObj = structuredClone(pageObjects);
  for (const key in body) {
    pageObj[key].value = body[key];
  }
  return pageObj;
};

export {
  mapBodyToPageObject,
};