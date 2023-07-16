import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';import { AgenceBaseDto } from "../dto/agence-dto";

export type AgenceDocument = Agence & mongoose.Document;

@Schema({ timestamps: true })
export class Agence extends AgenceBaseDto {
    @Prop() name?: string;
    @Prop() description?: string;
    @Prop() phone?: string;
    @Prop() address?: string;
    @Prop() email?: string;
    @Prop() logo?: string;
    @Prop() coverImage?: string;
    @Prop() facebook?: string;
    @Prop() twitter?: string;
    @Prop() instagram?: string;
    @Prop() youtube?: string;
    @Prop() threads?: string;
    @Prop() whatsapp?: string;
}

export const AgenceSchema = SchemaFactory.createForClass(Agence);