import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto, UserBase } from '../users/dto/user-dto';

import { UserService } from '../users/user.service';
import { JwtUserPayload } from './dto/jwt.use.payload';

const users = require('./dto/users.json');

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.userService.checkLogin(email, pass);
      if (user) {
        return user;
      } else {
        throw new UnauthorizedException();
      }
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  async signIn(user: UserBase) {
    const findeduser: UpdateUserDto = await this.userService.findUserByEmail(user.email);
    //const findeduser: any = users.find((_user: AuthDto) => _user.email === user.email);
    if (!findeduser) throw new UnauthorizedException('user does not exist');
    const isPassmatch = await this.userService.comparePassword(user.password, findeduser.password);
    if (!isPassmatch) throw new UnauthorizedException('Pasword incorrect');
    const payloadtosign: JwtUserPayload = {
      id: findeduser._id,
      email: findeduser.email,
      jobtitle: findeduser.jobtitle,
      accountType: findeduser.accountType
    }
    return this.login(payloadtosign);
  }

  async login(user: JwtUserPayload) {
    const payload: JwtUserPayload = {
      id: user.id,
      email: user.email,
      jobtitle: user?.jobtitle,
      accountType: user?.accountType
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
