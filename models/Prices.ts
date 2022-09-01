import Sequelize, { DataTypes } from 'sequelize';

import { sequelize } from '../db/index';
import { CourseModel } from './Courses';

class Price extends Sequelize.Model {}

export const PriceModel = Price.init({
  price: {
    type: Sequelize.FLOAT
  },
  hasInstalment: {
    type: Sequelize.BOOLEAN
  },
  cards: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}, {
  sequelize,
  modelName: 'price'
});

CourseModel.hasMany(PriceModel);

PriceModel.belongsTo(CourseModel);