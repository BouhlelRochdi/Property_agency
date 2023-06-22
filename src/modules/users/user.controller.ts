import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { query } from 'express';
import { diskStorage } from 'multer';
import path from 'path';
import { async } from 'rxjs';
import { JwtUserPayload } from '../auth';
import { CreateUserDto, UpdateUserDto } from './dto/user-dto';
import { CurrentUser } from './user.decorator';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  registerAccount(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerAccount(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add')
  create(@Body() createUserDto: CreateUserDto, @CurrentUser() cuser: JwtUserPayload) {
    return this.userService.create(createUserDto, cuser);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('update')
  updateCurrentUser(@Body() updateUser: UpdateUserDto, @CurrentUser() cuser: JwtUserPayload) {
    return this.userService.updateUser(updateUser, cuser);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('currentUser')
  getCurrentUser(@CurrentUser() cuser: JwtUserPayload) {
    return this.userService.getCurrentUser(cuser);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get('user-mail')
  findUserByEmail(@Body() body) {
    return this.userService.findUserByEmail(body.email);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOneById(@Query() query: any) {
    return this.userService.findOneById(query.id);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Put()
  updateUser(@Body() updateUserDto: UpdateUserDto, @CurrentUser() cuser: JwtUserPayload) {
    return this.userService.updateUser(updateUserDto, cuser);
  }

  //@UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param() params) {
    return this.userService.remove(params.id);
  }

  
  // @Post('avatar')
  // @UseInterceptors(FileInterceptor('file', {
  //     storage: diskStorage({
  //         destination: './uploadedFiles/avatars',
  //         /filename(req, file, callback) {
  //             const name = path.parse(file.originalname).name;

  //             const ext = path.parse(file.originalname).ext;
  //             callback(null, name + ext);
  //         }
  //          })
  async updateRandoWithPhoto(@Query() query, @UploadedFile() file: Express.Multer.File) {
        console.log('file: ', {
            path: file.path,
            filename: file.originalname,
            mimetype: file.mimetype
        })
        return this.userService.updateRandoWithPhoto(query.id, {
            path: file.path,
            filename: file.originalname,
            mimetype: file.mimetype
        });
    }
}
