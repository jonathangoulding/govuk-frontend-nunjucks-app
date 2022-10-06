// @ts-nocheck
import { Request, Response } from 'express';
import { FILE_UPLOAD_KEY, PERSONAL_DETAILS_KEY } from '../../shared/keys';
import { SummaryItem } from '../../shared/types';

const viewFile = 'check-answers/views/index.njk';

const mapItemToSummaryList = (pageObjects, key, sessionKey) => {
  return {
    key: {
      text: pageObjects[key].label,
    },
    value: {
      text: pageObjects[key].value,
    },
    actions: {
      items: [
        {
          href: '/' + sessionKey,
          text: 'Change',
          visuallyHiddenText: 'name',
        },
      ],
    },
  };
};

const handlePersonalDetails = (session) => {
  const personalDetailsSummaryList: SummaryItem[] = [];
  if (session[PERSONAL_DETAILS_KEY] && session[PERSONAL_DETAILS_KEY].pageObjects) {
    const pageObjects = session[PERSONAL_DETAILS_KEY].pageObjects;
    for (const key in pageObjects) {
      if (Object.prototype.hasOwnProperty.call(pageObjects, key)) {
        personalDetailsSummaryList.push(mapItemToSummaryList(pageObjects, key, PERSONAL_DETAILS_KEY));
      }
    }
  }
  return personalDetailsSummaryList;
};

const handleFileUpload = (session) => {
  const personalDetailsSummaryList: SummaryItem[] = [];
  if (session[FILE_UPLOAD_KEY] && session[FILE_UPLOAD_KEY].pageObjects) {
    const pageObjects = session[FILE_UPLOAD_KEY].pageObjects;

    if (pageObjects !== false) {
      personalDetailsSummaryList.push({
        key: {
          text: 'File name',
        },
        value: {
          text: pageObjects.originalname,
        },
        actions: {
          items: [
            {
              href: `${FILE_UPLOAD_KEY}/${pageObjects.filename}/download`,
              text: 'View',
              visuallyHiddenText: 'name',
            },
            {
              href: `${FILE_UPLOAD_KEY}/${pageObjects.filename}`,
              text: 'Delete',
              visuallyHiddenText: 'name',
            },
          ],
        },
      });
    }
  }
  return personalDetailsSummaryList;
};

const get = (req: Request, res: Response) => {
  if (req.session) {
    const { session } = req;
    const personalDetailsSummaryList = handlePersonalDetails(session);

    const fileUploadSummaryList = handleFileUpload(session);
    return res.render(viewFile, { personalDetailsSummaryList, fileUploadSummaryList });
  }
};

export {
  get,
};
