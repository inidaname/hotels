export interface User {
  readonly _id?: string;
  fullName: string;
  readonly password?: string;
  email: string;
  phoneNumber: string;
  image: string;
}

export interface UserData {
  readonly message: string;
  readonly token: string;
  readonly data: User;
}
