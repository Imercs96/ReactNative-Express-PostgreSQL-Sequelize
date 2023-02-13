export interface Users {
  data: UserDataType[];
}

export interface UserDataType {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  email: string,
  salt: string;
  phone?: string,
  dateOfBirth?: string,
  address?: string,
  state?: string,
  city?: string,
  zipCode?: string,
  image?: string,
}
