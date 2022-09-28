interface GDSError {
    text: string
    href: string
}

interface pageObject {
    id: string
    value: string
    errorMessage: GDSError | boolean
}

interface pageObjects {
    [key: string]: pageObject
}

export {
    GDSError,
    pageObject,
    pageObjects
}