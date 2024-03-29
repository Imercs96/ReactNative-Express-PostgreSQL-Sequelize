import { NextFunction, Request, Response } from 'express';

import { encryptPassword } from '../../bcrypt';
import { expiresIn, sign } from '../../jwt/index';
import User from '../../models/User';
import { UserDataType } from '../interfaces/users';

// POST auth user
const authUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<string, Record<string, string>>> = 
async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req?.body;
    const userResponse = await User.findOne({ where: { email, username }});
    const userResponseJSON: UserDataType | undefined = userResponse?.toJSON();

    if(userResponseJSON) {
      // Salt
      const { salt } = userResponseJSON;
      // Encrypt password
      const encryptPass: string = await encryptPassword(password, salt);
      const response = await User.findOne({ where: { email, username, password: encryptPass }});
      const responseJSON: UserDataType | undefined = response?.toJSON();
      if(responseJSON) {
        // Token
        const token: string = sign(responseJSON);
        return res.status(200).send({ 
          jwt: { token, expiresIn }, 
          user: responseJSON
        });
      } else {
        return res.status(401).send({ message: 'Error logging in. The email address, password or username is not correct'});
      }
    }
    else {
      return res.status(401).send({ message: 'Error logging in. The email address or username is not correct'});
    }
  } catch(error) {
    return res.status(400).send(error);
  }
};

export { authUser };