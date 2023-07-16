/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AgenceDocument } from './models/agence';
import { ProprietyDocument } from './models/propriety';

@Injectable()
export class AgenceService { 
    constructor(
        @InjectModel('Agence') private readonly agenceModel: Model<AgenceDocument>,
        @InjectModel('Propriety') private readonly proprietyModel: Model<ProprietyDocument>
      ) { }

    async createAgence(createAgenceDto: any): Promise<AgenceDocument> {
        const createdAgence = new this.agenceModel(createAgenceDto);
        return await createdAgence.save();
    }

    async createPropriety(createProprietyDto: any): Promise<ProprietyDocument> {
        const createdPropriety = new this.proprietyModel(createProprietyDto);
        return await createdPropriety.save();
    }

    async getAllProprieties(): Promise<ProprietyDocument[]> {
        return await this.proprietyModel.find().exec();
    }
}
