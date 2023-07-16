
export class AgenceBaseDto {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  description?: string;
  logo?: string;
  coverImage?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  threads?: string;
  whatsapp?: string;
}

export class CreateAgenceDto extends AgenceBaseDto {
}
export class UpdateAgenceDto extends AgenceBaseDto {
  _id?: string;
}