import { AgenceService } from './agence.service';
import { AgenceController } from './agence.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgenceSchema } from './models/agence';
import { ProprietySchema } from './models/propriety';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Agence', schema: AgenceSchema },
            { name: 'Propriety', schema: ProprietySchema }
        ]),
        // MulterModule.register({
        //     dest: './uploads/img/porpriety',
        // }),
    ],
    controllers: [AgenceController,],
    providers: [AgenceService,],
    exports: [AgenceService,]
})
export class AgenceModule { }
