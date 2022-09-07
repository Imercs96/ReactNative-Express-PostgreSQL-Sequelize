import { sequelize } from '../db/index';
import app from './app';

/* Start Express server */
const server = app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});

// db.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// db.sync({ force: true }) - This creates the table, dropping it first if it already existed
// db.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

// Waiting DB sync
sequelize.sync({ force: false }).then(() => server);

export default server;
