import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtUserPayload } from '../dto/jwt.use.payload';
import { environment } from 'src/environements/environement';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: environment.jwtSecret
    });
  }

  async validate(payload: any) {
    const res: JwtUserPayload = {
      id: payload.id,
      email: payload.email,
      jobtitle: payload.jobtitle,
      accountType: payload.accountType
    };
    return res;
  }
}
