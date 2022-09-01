import express from 'express';
import path from 'path';

import users from './routes/users';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3001);
// Express middlewares (Body Parser + JSON format from POST|PUT request)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serving static files (images, docs, etc)
app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 })
);

// Routes
app.use('/api/users', users);

export default app;
