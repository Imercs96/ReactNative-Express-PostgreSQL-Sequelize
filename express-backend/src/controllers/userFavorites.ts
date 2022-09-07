import { NextFunction, Request, Response } from 'express';

import Product from '../../models/Product';
import UserFavorites from '../../models/UserFavorites';
import { ProductDataType } from '../interfaces/products';
import { UserFavoritesDataType } from '../interfaces/userFavorites';

// GET all users
const getUserFavorites: (req: Request, res: Response, next: NextFunction) =>     Promise<Response<UserFavoritesDataType, Record<string, UserFavoritesDataType>> | void> = 
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await UserFavorites.findAll();
    response && res.status(200).send(response);

    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

// GET user by ID
const getUserFavoritesById: (req: Request, res: Response, next: NextFunction) => Promise<Response<UserFavoritesDataType, Record<string, UserFavoritesDataType>> | void>
= async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req?.params;

    const response = await UserFavorites.findAll({ where: { userId: id }});
    if(response.length) {
      const data: UserFavoritesDataType[] = response.map(e => e.toJSON());
      const productIds = data.map(e => e.productId);
      if(productIds.length){
        const products = await Product.findAll({ where: { id: productIds }});
        const favorites: ProductDataType[] = products.map(e => e.toJSON());
        favorites && res.status(200).send(favorites);
      }
      else res.status(404).send({ error: 'Favorite products do not found' });
    }
    else res.status(404).send({ error: `Do not exists favorites for user with id ${ id }` });
    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

// DELETE data by ID
const deleteUserFavoriteById: (req: Request, res: Response, next: NextFunction) => Promise<Response<UserFavoritesDataType, Record<string, UserFavoritesDataType>> | void>
= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req?.params;
    const { productId } = req?.body;

    await UserFavorites.destroy({ where: { userId: id, productId }});

    const response = await UserFavorites.findAll({ where: { userId: id }});
    if(response.length) {
      const data: UserFavoritesDataType[] = response.map(e => e.toJSON());
      const productIds = data.map(e => e.productId);
      if(productIds.length){
        const products = await Product.findAll({ where: { id: productIds }});
        const favorites: ProductDataType[] = products.map(e => e.toJSON());
        favorites && res.status(200).send(favorites);
      }
      else res.status(404).send({ error: 'Favorite products do not found' });
    }
    else res.status(404).send({ error: `Do not exists favorites for user with id ${ id }` });

    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

// POST data
const addUserFavorites: (req: Request<UserFavoritesDataType, UserFavoritesDataType, UserFavoritesDataType>, res: Response, next: NextFunction) => 
  Promise<Response<UserFavoritesDataType, Record<string, UserFavoritesDataType>> | void> =
async (req: Request<UserFavoritesDataType, UserFavoritesDataType, UserFavoritesDataType>, res: Response, next: NextFunction) => {
  try {
    const { productId, userId } = req?.body;

    const response = await UserFavorites.create({ productId, userId });

    response && res.status(200).send(response);

    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

export { 
  addUserFavorites, 
  deleteUserFavoriteById, 
  getUserFavorites, 
  getUserFavoritesById
};