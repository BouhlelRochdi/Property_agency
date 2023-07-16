import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongoose/mongoose.config.service';
import { AuthModule } from './modules/auth';
import { AgenceModule } from './modules/Agence';
import { UserModule } from './modules/users';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AgenceModule,
    AuthModule,
    UserModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads', 'img', 'propriety'),
      serveRoot: '/uploads/img/propriety',
    }),
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService, MongooseConfigService],
})
export class AppModule { }
