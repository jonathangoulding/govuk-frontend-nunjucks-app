import express from 'express';
import dotenv from 'dotenv';
import configureNunjucks from './server/configureNunjucks';
import configureStaticAssets from './server/configureStaticAssets';
import { mainRouter } from './server/mainRouter';
import session from 'express-session';
import { sessionConfig } from './server/sessionStore';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());
app.use(session(sessionConfig()));
app.use(cookieParser());

configureNunjucks(app);
configureStaticAssets(app);
mainRouter(app);


// initial session test code
app.get('/session', function (req, res) {
  res.send('Hello ' + JSON.stringify(req.session));
});

app.get('/counter', function (req, res) {
  if (req.session) {
    if (req.session.page_views) {
      req.session.page_views++;
      res.send('You visited this page ' + req.session.page_views + ' times');
    } else {
      req.session.page_views = 1;
      res.send('Welcome to this page for the first time!');
    }
  }

});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
