import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './environements/environement';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //await app.listen(3000);
  app.enableCors();
  app.setGlobalPrefix('api');
  const apiPort = environment.apiPort;
  await app.listen(apiPort, () => {
    console.log('Listening at http://localhost:', apiPort);
  });
}
bootstrap();
