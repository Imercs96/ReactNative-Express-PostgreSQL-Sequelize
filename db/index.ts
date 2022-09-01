import { Sequelize } from 'sequelize';

export const sequelize: Sequelize = 
  new Sequelize('DATAAPP', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    logging: false
  }
  );