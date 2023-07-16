export class ProprietyDto {
  name?: string;
  description?: string;
  mapLink?: string;
  price?: number;
  status?: string;
  disponibilty?: boolean;
  mainImage?: string;
  coverImage?: string;
  images?: string[];
  type?: string; // appartement, maison, villa, studio
  video?: string;
  caracteristiques?: caracteristiquesDto [];
}

export interface caracteristiquesDto {
  attribute?: string;
  value?: string;
  description?: string;
}
export class CreateProprietyDto extends ProprietyDto {
}
export class UpdateProprietyDto extends ProprietyDto {
  _id?: string;
}