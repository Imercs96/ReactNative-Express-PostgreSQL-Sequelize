import '../jwt/index';
import '../bcrypt/index';

import express from 'express';
import path from 'path';

import products from './routes/products';
import userFavorites from './routes/userFavorites';
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
app.use('/api/products', products);
app.use('/api/users', users);
app.use('/api/favorites', userFavorites);

export default app;
