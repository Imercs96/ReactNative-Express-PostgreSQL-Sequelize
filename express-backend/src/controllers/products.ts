import { NextFunction, Request, Response } from 'express';

import Product from '../../models/Product';
import { ProductDataType } from '../interfaces/products';

// GET all users
const getProducts: (req: Request, res: Response, next: NextFunction) =>    
  Promise<Response<ProductDataType, Record<string, ProductDataType>> | void> = 
async (req: Request, res: Response) => {
  try {
    const response = await Product.findAll();
    response && res.status(200).send(response);

  } catch(error) {
    return res.status(400).send(error);
  }
};

// GET user by ID
const getProductById: (req: Request, res: Response, next: NextFunction) => Promise<Response<ProductDataType, Record<string, ProductDataType>> | void>
= async(req: Request, res: Response) => {
  try {
    const { id } = req?.params;

    const response = await Product.findByPk(id);

    if(response) res.status(200).send(response);
    else res.status(404).send({ error: 'Parameter or id do not found' });

  } catch(error) {
    return res.status(400).send(error);
  }
};

// DELETE data by ID
const deleteProductById: (req: Request, res: Response, next: NextFunction) => Promise<Response<ProductDataType, Record<string, ProductDataType>> | void>
= async (req: Request, res: Response) => {
  try {
    const { id } = req?.params;

    const response = await Product.destroy({ where: { id }});
    const products = await Product.findAll();
    if(response) res.status(200)
      .send({ products, message: `The product with id ${ id } has been deleted succesfully`  });
    else res.status(404)
      .send({ error: `The product with id ${ id } hasn't been deleted`  });
  } catch(error) {
    return res.status(400).send(error);
  }
};

// POST data
const addProduct: (req: Request<ProductDataType, ProductDataType, ProductDataType>, res: Response, next: NextFunction) => 
  Promise<Response<ProductDataType, Record<string, ProductDataType>> | void> =
async (req: Request<ProductDataType, ProductDataType, ProductDataType>, res: Response) => {
  try {
    const { bestPrice, description, hasDiscount, heroImage, id, isAvailable, listPrice, name, origin, quantity, rating, collectionImages, variants } = req?.body;

    const response = await Product.create({ bestPrice, description, hasDiscount, heroImage, id, isAvailable, listPrice, name, origin, quantity, rating, collectionImages, variants });

    response && res.status(200).send(response);

  } catch(error) {
    return res.status(400).send(error);
  }
};

// PUT data by ID
const putProductById: (req: Request<ProductDataType, ProductDataType, ProductDataType>, res: Response, next: NextFunction) =>     Promise<Response<ProductDataType, Record<string, ProductDataType>> | void>=
async (req: Request<ProductDataType, ProductDataType, ProductDataType>, res: Response) => {
  try {
    const { bestPrice, description, hasDiscount, heroImage, isAvailable, listPrice, name, origin, quantity, rating, collectionImages, variants } = req?.body;
    // Find id
    const { id } = req?.params;

    const response = await Product.update(
      { bestPrice, description, hasDiscount, heroImage, id, isAvailable, listPrice, name, origin, quantity, rating, collectionImages, variants },
      { where: { id }}
    );

    if(response) {
      const user = await Product.findByPk(id);
      res.status(200).send({ user, message: `The product with id ${ id } has been updated succesfully`  });
    }
    else res.status(404).send({ error: `The product with id ${ id } hasn't been updated` });
  } catch(error) {
    return res.status(400).send(error);
  }
};

// PATCH data by ID
const patchProductById: (req: Request<ProductDataType, ProductDataType, ProductDataType>, res: Response, next: NextFunction) =>     Promise<Response<ProductDataType, Record<string, ProductDataType>> | void>=
async (req: Request<ProductDataType, ProductDataType, ProductDataType>, res: Response) => {
  try {
    const { bestPrice, description, hasDiscount, heroImage, isAvailable, listPrice, name, origin, quantity, rating, collectionImages, variants } = req?.body;
    // Find id
    const { id } = req?.params;

    const response = await Product.update(
      { bestPrice, description, hasDiscount, heroImage, id, isAvailable, listPrice, name, origin, quantity, rating, collectionImages, variants },
      { where: { id }}
    );

    if(response) {
      const user = await Product.findByPk(id);
      res.status(200).send({ user, message: `The product with id ${ id } has been updated succesfully`  });
    }
    else res.status(404).send({ error: `The product with id ${ id } hasn't been updated` });
  } catch(error) {
    return res.status(400).send(error);
  }
};

export { 
  addProduct, 
  deleteProductById, 
  getProductById, 
  getProducts, 
  patchProductById, 
  putProductById 
};