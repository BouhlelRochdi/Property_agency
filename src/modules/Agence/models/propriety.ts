// One to many by references
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { ProprietyDto, caracteristiquesDto } from '../dto/propriety-dto';

export type ProprietyDocument = Propriety & mongoose.Document;

@Schema({ timestamps: true })
export class Propriety extends ProprietyDto {
  @Prop() name?: string;
  @Prop() description?: string;
  @Prop() mapLink?: string;
  @Prop() price?: number;
  @Prop() status?: string;
  @Prop() disponibilty?: boolean;
  @Prop() mainImage?: string;
  @Prop() coverImage?: string;
  @Prop() images?: string[];
  @Prop() type?: string; // appartement, maison, villa, studio
  @Prop() video?: string;
  @Prop() caracteristiques?: caracteristiquesDto [];
}

export const ProprietySchema = SchemaFactory.createForClass(Propriety);
