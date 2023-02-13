import Sequelize, { DataTypes } from 'sequelize';

import { sequelize } from '../db/index';

class User extends Sequelize.Model {}

// User model
export default User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: {
        msg: 'Please enter your first name'
      }
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: {
        msg: 'Please enter your last name'
      }
    }
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      notNull: {
        msg: 'Please enter your username'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      notNull: {
        msg: 'Please enter your password'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  dateOfBirth: {
    type: DataTypes.STRING, 
    defaultValue: DataTypes.NOW
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  zipCode: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: null,
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
  modelName: 'user'
});
