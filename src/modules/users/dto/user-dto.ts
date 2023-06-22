export class UserBase {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  adress?: string;
  phone?: string;
  cvLink?: string;
  photo?: string;
  logo?: string;
  matFiscal?: string;
  birthdate?: Date;
  accountType?: string;
  jobtitle?: string;
}
export class CreateUserDto extends UserBase {
}
export class UpdateUserDto extends UserBase {
  _id?: string;
}