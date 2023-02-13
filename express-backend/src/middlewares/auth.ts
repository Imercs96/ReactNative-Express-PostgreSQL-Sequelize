import { NextFunction, Request, Response } from 'express';

import { verify } from '../../jwt';

export const getAuthUser: (req: Request, res: Response, next: NextFunction) => void | Response<NextFunction, Record<string, NextFunction>> = (req, res, next) => {
  try {
    const { token } = req?.body;
    const validate = verify(token);
    if(!validate) res.status(401).send('Session timeout. For excess time and safety we have timed out your session. You may loggin again to browse our shop'); 
    return next();

  } catch(error){
    return res.status(400).send(error);
  }
};
