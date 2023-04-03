// Modules
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

// Middleware
import { verifyAuthenticationApiKey } from './middlewares/auth';
// Express Routes
import auth from './routes/auth';
import products from './routes/products';
import userFavorites from './routes/userFavorites';
import users from './routes/users';


// Create Express server
const app = express();

// This module loads environment variables from a .env
dotenv.config();

// Express configuration
app.set('port', process.env.PORT || 3001);
// Express middlewares (Body Parser + JSON format from POST|PUT request)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serving static files (images, docs, etc)
app.use(
  express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 })
);

// Auth Api-Key Middleware
app.use(verifyAuthenticationApiKey);

// Routes
app.use('/api/products', products);
app.use('/api/users', users);
app.use('/api/favorites', userFavorites);
app.use('/api/auth', auth);

export default app;
