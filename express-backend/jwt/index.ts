import jwt from 'jsonwebtoken';

import { UserDataType } from '../src/interfaces/users';

// Secret pass
const SECRET: string = 'splash_art_deco';

// Expired In 5 minutes
const signOptions: jwt.SignOptions | undefined = { expiresIn: '300000' };

// Sign Token
export const sign: (data: UserDataType) => string = (data) => jwt.sign(data, SECRET, signOptions);
// Verify Token
export const verify: (token: string) => string | jwt.JwtPayload = (token: string) => jwt.verify(token, SECRET);