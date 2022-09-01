import { Sequelize } from 'sequelize';

// Sequelize connect DB
export const sequelize: Sequelize = 
  new Sequelize('splash_art_deco', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    logging: false
  });