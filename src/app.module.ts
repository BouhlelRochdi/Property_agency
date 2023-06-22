import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongoose/mongoose.config.service';
import { AuthModule } from './modules/auth';
import { UserModule } from './modules/users';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService, MongooseConfigService],
})
export class AppModule {}
