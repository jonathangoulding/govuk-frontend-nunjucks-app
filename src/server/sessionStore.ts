import session from 'express-session';
import redisStore from 'connect-redis';
import { createClient } from 'redis';

const sessionConfig = () => {    

  const RedisStore = redisStore(session);
  const redisClient = createClient({ legacyMode: true });
  redisClient.connect().catch(console.error);

  return {
    store: new RedisStore({ client: redisClient }),
    secret: 'i am a secret',
    resave: false,
    saveUninitialized: true,
    cookie: {},
  };
};
  
export {
  sessionConfig,
}; 





// import connectMongodb from 'connect-mongodb-session';
// import session from 'express-session';

// const SESSION_MONGODB_URL = 'mongodb://localhost:27017';
// const SESSION_MONGODB_DB_NAME = 'store';
// const SESSION_MONGODB_COLLECTION = 'sessions';

// const config = {
//   server: {
//     sessionSecret: 'i am a secret',
//   },
//   db: {
//     session: {
//       uri: SESSION_MONGODB_URL,
//       databaseName: SESSION_MONGODB_DB_NAME,
//       collection: SESSION_MONGODB_COLLECTION || 'sessions',
//       expiresColumn: '_ts',
//       expires: 1000 * 60 * 60 * 24 * 14, // value in milliseconds
//       expiresAfterSeconds: 60 * 60 * 24 * 14, // value in seconds
//       connectionOptions: {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       },
//     },
//   },
// };

// const sessionConfig = () => {
//   const { sessionSecret } = config.server;
  
//   if (!sessionSecret) {
//     throw new Error('Session secret must be set');
//   }
  
//   const MongoDBStore = connectMongodb(session);
  
//   const store = new MongoDBStore(config.db.session);
  
//   /* istanbul ignore next */
//   store.on('error', (err) => {
//     console.error({ err }, 'MongoDB session store error');
//   });
  
//   return {
//     store,
//     secret: sessionSecret,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {},
//   };
// };
  
// export {
//   sessionConfig,
// }; 


