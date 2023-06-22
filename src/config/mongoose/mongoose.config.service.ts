import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { environment } from 'src/environements/environement';

export const defaultConfig = {
  uri: environment.mongoUri,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    if(environment.production){
      // For node env
      const resEnv = {...defaultConfig, uri: process.env.mongoUri} ;
      console.warn('Mongo try to connect uri:',resEnv); 
     return   {...defaultConfig, uri: process.env.mongoUri} 
   }else{
       return  defaultConfig
   }
  }
}
