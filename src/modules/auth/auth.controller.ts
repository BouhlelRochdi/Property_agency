import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post('signin')
  signIn(@Body() user: AuthDto){
    return this.authService.signIn(user)
  }

  @Post('validate')
  validateUser(@Body() user: AuthDto){
    return this.authService.validateUser(user.email, user.password)
  }
}
