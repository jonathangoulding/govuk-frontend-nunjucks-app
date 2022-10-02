// @ts-nocheck
import { Request, Response } from 'express';
import { PERSONAL_DETAILS_KEY } from '../../shared/keys';
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

const get = (req: Request, res: Response) => {
  if (req.session) {
    const { session } = req;
    const personalDetailsSummaryList = handlePersonalDetails(session);
    return res.render(viewFile, { personalDetailsSummaryList });
  }
};

export {
  get,
};
