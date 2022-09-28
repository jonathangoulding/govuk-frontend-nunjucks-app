import {pageObjects} from "./types";

const mapBodyToPageObject = (body: any, pageObjects: pageObjects): pageObjects => {
    const pageObj = structuredClone(pageObjects)
    for (const key in body) {
        pageObj[key].value = body[key]
    }
    return pageObj
}

export {
    mapBodyToPageObject
}