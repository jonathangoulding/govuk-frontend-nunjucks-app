interface GDSError {
  text: string
  href: string
}

interface PageObject {
  value: string
  errorMessage: GDSError | boolean
  label: string
}

interface PageObjects {
  [key: string]: PageObject
}

interface SummaryItem {
  key: {
    text: string
  },
  value: {
    text: string
  }, 
  actions: {
    // fix this
    items: [
      {
        href: string
        text: string
        visuallyHiddenText: string
      },
    ],
  }
}

export {
  GDSError,
  PageObject,
  PageObjects,
  SummaryItem,
};