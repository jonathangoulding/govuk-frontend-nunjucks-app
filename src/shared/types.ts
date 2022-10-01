interface GDSError {
  text: string
  href: string
}

interface PageObject {
  value: string
  errorMessage: GDSError | boolean
}

interface PageObjects {
  [key: string]: PageObject
}

export {
  GDSError,
  PageObject,
  PageObjects,
};