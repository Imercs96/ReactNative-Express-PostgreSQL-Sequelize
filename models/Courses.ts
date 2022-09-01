import Sequelize, { DataTypes } from 'sequelize';

import { sequelize } from '../db/index';

class Course extends Sequelize.Model {}

export const CourseModel = Course.init({
  title: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.STRING
  },
  teachers: {
    type: Sequelize.STRING
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
  modelName: 'course'
});
