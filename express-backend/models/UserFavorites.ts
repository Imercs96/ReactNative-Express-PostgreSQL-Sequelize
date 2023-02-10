import Sequelize, { DataTypes } from 'sequelize';

import { sequelize } from '../db/index';
import Product from './Product';
import User from './User';

class UserFavorites extends Sequelize.Model {}

// UserFavorites model
export default UserFavorites.init({
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  }
},{
  sequelize,
  modelName: 'user_favorites'
});

User.belongsToMany(Product, { through: UserFavorites });
Product.belongsToMany(User, { through: UserFavorites });