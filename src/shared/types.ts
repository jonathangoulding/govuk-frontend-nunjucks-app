interface GDSError {
  text: string
  href: string
}

interface PageObject {
  id: string
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