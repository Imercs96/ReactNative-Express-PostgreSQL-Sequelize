import { NextFunction, Request, Response } from 'express';

import { encryptPassword } from '../../bcrypt';
import User from '../../models/User';
import { UserDataType } from '../interfaces/users';

// GET all users
const getUsers: (req: Request, res: Response, next: NextFunction) =>           Promise<Response<UserDataType, Record<string, UserDataType>> | void> = 
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await User.findAll();
    response && res.status(200).send(response);

    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

// GET user by ID
const getUserById: (req: Request, res: Response, next: NextFunction) => Promise<Response<UserDataType, Record<string, UserDataType>> | void>
= async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req?.params;

    const response = await User.findByPk(id);

    if(response) res.status(200).send(response);
    else res.status(404).send({ error: 'Parameter or id do not found' });

    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

// DELETE data by ID
const deleteUserById: (req: Request, res: Response, next: NextFunction) => Promise<Response<UserDataType, Record<string, UserDataType>> | void>
= async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req?.params;

    const response = await User.destroy({ where: { id }});
    const users = await User.findAll();
    if(response) res.status(200)
      .send({ users, message: `The user with id ${ id } has been deleted succesfully`  });
    else res.status(404)
      .send({ error: `The user with id ${ id } hasn't been deleted`  });

    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

// POST data
const addUser: (req: Request<UserDataType, UserDataType, UserDataType>, res: Response, next: NextFunction) => 
  Promise<Response<UserDataType, Record<string, UserDataType>> | void> =
async (req: Request<UserDataType, UserDataType, UserDataType>, res: Response, next: NextFunction) => {
  try {
    const { email, firstName, lastName, password, username, address, city, dateOfBirth, image, phone, state, zipCode } = req?.body;

    const encryptPass: string = await encryptPassword(password);
    console.log({ encryptPass });

    const response = await User.create({ email, firstName, lastName, password: encryptPass, username, address, city, dateOfBirth, image, phone, state, zipCode });

    response && res.status(200).send(response);

    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

// PUT data by ID
const putUserById: (req: Request<UserDataType, UserDataType, UserDataType>, res: Response, next: NextFunction) => Promise<Response<UserDataType, Record<string, UserDataType>> | void>=
async (req: Request<UserDataType, UserDataType, UserDataType>, res: Response, next: NextFunction) => {
  try {
    const { email, firstName, lastName, password, username, address, city, dateOfBirth, image, phone, state, zipCode } = req?.body;
    // Find id
    const { id } = req?.params;

    const response = await User.update(
      { email, firstName, lastName, password, username, address, city, dateOfBirth, image, phone, state, zipCode },
      { where: { id }}
    );

    if(response) {
      const user = await User.findByPk(id);
      res.status(200).send({ user, message: `The user with id ${ id } has been updated succesfully`  });
    }
    else res.status(404).send({ error: `The user with id ${ id } hasn't been updated` });

    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

// PATCH data by ID
const patchUserById: (req: Request<UserDataType, UserDataType, UserDataType>, res: Response, next: NextFunction) => Promise<Response<UserDataType, Record<string, UserDataType>> | void>=
async (req: Request<UserDataType, UserDataType, UserDataType>, res: Response, next: NextFunction) => {
  try {
    const { email, firstName, lastName, password, username, address, city, dateOfBirth, image, phone, state, zipCode } = req?.body;
    // Find id
    const { id } = req?.params;

    const response = await User.update(
      { email, firstName, lastName, password, username, address, city, dateOfBirth, image, phone, state, zipCode },
      { where: { id }}
    );

    if(response) {
      const user = await User.findByPk(id);
      res.status(200).send({ user, message: `The user with id ${ id } has been updated succesfully`  });
    }
    else res.status(404).send({ error: `The user with id ${ id } hasn't been updated` });

    next();
  } catch(error) {
    return res.status(400).send(error);
  }
};

export { 
  addUser, 
  deleteUserById, 
  getUserById, 
  getUsers, 
  patchUserById, 
  putUserById 
};