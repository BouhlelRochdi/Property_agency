import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserModule } from '../users/user.module';
import { environment } from 'src/environements/environement';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: environment.jwtSecret,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy
  ],
  exports: [AuthService]
})
export class AuthModule { }
