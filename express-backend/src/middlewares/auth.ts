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

export const verifyAuthenticationApiKey: (req: Request, res: Response, next: NextFunction) => void = (req, res, next) => {
  try {
    const xApiKey = req?.headers['x-api-key'] as string;
    const env: string | undefined = process?.env?.NODE_ENV;
    const developmentApiKey: string | undefined = 
      (env == 'development') ? process.env.DEVELOPMENT_API_KEY : process.env.PRODUCTION_API_KEY;
      
    if(xApiKey && developmentApiKey) {
      const regexExpression: RegExp = new RegExp(developmentApiKey);
      const validateExpression: boolean = regexExpression.test(xApiKey);
      if(!validateExpression) 
        return res.status(401).send({ error: '401 Non-Authorized Status. Please check if your api-key is correctly configured'});
      return next();
    }
    return res.status(401).send({ error: '401 Non-Authorized Status. Please check if your api-key is correctly configured'});
  } catch(error){
    return res.status(400).send(error);
  }
};
