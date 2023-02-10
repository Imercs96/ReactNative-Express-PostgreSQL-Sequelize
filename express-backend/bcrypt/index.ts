import bcrypt from 'bcrypt';

// Bcrypt hash password
const hashPassword: (password: string, salt: string) => Promise<string> = 
async (password: string, salt: string) => {
  const bcryptHashPassword = await bcrypt.hash(password, salt);
  return bcryptHashPassword;
};

// Salt generate
const salt: string = bcrypt.genSaltSync();

// Encrypt Password function
export const encryptPassword: (password: string) => Promise<string> = 
  (password) => hashPassword(password, salt);