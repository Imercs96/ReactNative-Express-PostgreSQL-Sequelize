export interface UserSignInValues {
  username: string;
  email: string;
  password: string;
}

export interface UserSignUpValues extends UserSignInValues {
  firstName: string,
  lastName: string,
  phone?: string,
  dateOfBirth?: string,
  address?: string,
  state?: string,
  city?: string,
  zipCode?: string,
  image?: string,
}

export type JWT = { expiresIn: number | null, token: string | null }

export interface UserSignInResponse {
  jwt: JWT;
  user: UserSignUpValues;
}
