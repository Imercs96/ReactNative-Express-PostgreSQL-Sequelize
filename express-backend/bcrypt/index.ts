// Module
import bcrypt from 'bcrypt';

// Bcrypt hash password
const hashPassword: (password: string, salt: string) => Promise<string> = 
async (password: string, salt: string) => {
  const bcryptHashPassword = await bcrypt.hash(password, salt);
  return bcryptHashPassword;
};

// Salt generate
export const saltGenerated: string = bcrypt.genSaltSync();

// Encrypt Password function
export const encryptPassword: (password: string, salt: string) => Promise<string> = 
  (password, salt) => hashPassword(password, salt);