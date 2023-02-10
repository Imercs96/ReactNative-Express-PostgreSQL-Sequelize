import jwt from 'jsonwebtoken';

const SECRET: string = 'splash';

const signOptions: jwt.SignOptions | undefined = { expiresIn: '2h' };

const sign = (data: any) => { 
  return jwt.sign(data, SECRET, signOptions); 
};

const verify = (token: string) => {
  return jwt.verify(token, SECRET);
};

const token = sign({ 'email': 'pepe@pepe.com', 'password': '123434'});
console.log({ token });

const validate = verify(token);
console.log({ validate });