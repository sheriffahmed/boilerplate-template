// const { blueBright } = require('chalk');
const PORT = process.env.PORT || 8080;
const app = require('./app');
const db = require('./db');
const init = async () => {
 await db.sync()  // sync our database
  app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);

};

init();
