import {pageObjects} from "../../../shared/types";

const validateBody = (pageObject: pageObjects, body: { firstName: string; lastName: string; }) => {
    const pageObjects: pageObjects = structuredClone(pageObject)

    if (body.firstName === '') {
        pageObjects.firstName.errorMessage = {text: 'First name is required', href: '#firstName'}
    }
    if (body.lastName === '') {
        pageObjects.lastName.errorMessage = {text: 'Last name is required', href: '#lastName'}
    }

    const summaryErrors = []
    for (const key in pageObjects) {
        if (pageObjects[key].errorMessage !== false) {
            summaryErrors.push(pageObjects[key].errorMessage)
        }
    }
    return {
        pageObjects,
        summaryErrors
    }
}

export {
    validateBody
}