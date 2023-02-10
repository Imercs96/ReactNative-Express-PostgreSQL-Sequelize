import Sequelize, { DataTypes } from 'sequelize';

import { sequelize } from '../db/index';

class Product extends Sequelize.Model {}

// Product model
export default Product.init({
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true,
      notNull: {
        msg: 'Please enter the id of product'
      }
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: {
        msg: 'Please enter the name of product'
      }
    }
  },
  description: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: {
        msg: 'Please enter the description of product'
      }
    }
  },
  listPrice: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      notNull: {
        msg: 'Please enter the price of product'
      }
    }
  },
  bestPrice: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  hasDiscount: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  variants: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      notEmpty: true,
    }
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  heroImage: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: null
  },
  collectionImages: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: null
  },
  rating: {
    type: DataTypes.FLOAT, 
    allowNull: true,
    defaultValue: 0
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
  modelName: 'product'
});