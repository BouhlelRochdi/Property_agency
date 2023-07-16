import { Body, Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { AgenceService } from './agence.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtUserPayload } from '../auth';
import { CreateAgenceDto } from './dto/agence-dto';
import { CreateProprietyDto } from './dto/propriety-dto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { Observable, of } from 'rxjs';
import { join } from 'path';
import path = require('path');
import { v4 as uuidv4 } from 'uuid';

const multerOptions: MulterOptions = {
    storage: diskStorage({
        destination: './uploads/img/porpriety',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    }),
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
};

@Controller('agence')
export class AgenceController {
    constructor(private readonly agenceService: AgenceService) { }

    @Post('register')
    registerAccount(@Body() createAgenceDto: CreateAgenceDto) {
        //   return this.userService.registerAccount(createUserDto);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Post('add-agence')
    create(@Body() createAgenceDto: CreateAgenceDto) {
        return this.agenceService.createAgence(createAgenceDto);
    }

    @Post('add-propriety')
    createPropriety(@Body() createProprietyDto: CreateProprietyDto) {
        return this.agenceService.createPropriety(createProprietyDto);
    }

    // @UseGuards(AuthGuard('jwt'))
    @Get('proprieties')
    getAllProprieties() {
        return this.agenceService.getAllProprieties();
    }

    @Post('upload')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'mainImage', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 },
        { name: 'images' },
    ], multerOptions)
    )
    // @UseInterceptors(
    //     FileInterceptor('file')
    //     // FileInterceptor('file', {
    //     //   storage: diskStorage({
    //     //     destination: 'uploads/img/porpriety',
    //     //     filename: (req, file, cb) => {
    //     //       cb(null, file.originalname);
    //     //     },
    //     //   }),
    //     // }),
    //   )
    uploadFile(@UploadedFiles() files: { mainImage?: Express.Multer.File, coverImage?: Express.Multer.File, images?: Express.Multer.File[] }) {
        console.log('files: ', files);
        const newObj: CreateProprietyDto = {
            name: 'test',
            description: 'test',
            mapLink: 'test',
            price: 0,
            status: 'test',
            disponibilty: true,
            mainImage: files.mainImage[0].originalname,
            coverImage: files.coverImage[0].originalname,
            images: files.images.map((image) => image.originalname),
            type: 'test',
            video: 'test',
            caracteristiques: [],
        }
        return this.agenceService.createPropriety(newObj);
    }

    @Get('profile-image')
    findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
        return of(res.sendFile(join(__dirname, 'uploads/profileimages/008b3744d24-2de1-401e-ab1c-5baf02e6dae9.jpg')));
    }

}

