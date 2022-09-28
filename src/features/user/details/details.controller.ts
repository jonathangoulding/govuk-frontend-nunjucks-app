import {Request, Response} from "express";
import {validateBody} from "./details.validatior";
import {pageObject, pageObjects} from "../../../shared/types";
import {mapBodyToPageObject} from "../../../shared/utils";

const firstName: pageObject = {
    id: 'firstName',
    value: '',
    errorMessage: false
}

const lastName: pageObject = {
    id: 'lastName',
    value: '',
    errorMessage: false
}

const pageObject: pageObjects = {
    firstName,
    lastName
}

const renderPage = (res: Response, body: any) => {
    return res.render('user/details/views/index.njk', body);
}

const get = (req: Request, res: Response) => {
    renderPage(res, pageObject)
}

const post = (req: Request, res: Response) => {
    const {body} = req;
    const postPageObjects: pageObjects = mapBodyToPageObject(body, structuredClone(pageObject))

    const validatedPageObject = validateBody(postPageObjects, body)

    if (validatedPageObject.summaryErrors.length > 0) {
        return renderPage(res, {summaryErrors: validatedPageObject.summaryErrors, ...validatedPageObject.pageObjects})
    }
    return res.redirect('/')
}

export {
    get,
    post,
};
