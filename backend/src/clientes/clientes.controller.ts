import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}
  
  @Post()
  @UseInterceptors(
    FileInterceptor('avatar', {
      //fileFilter: fileExtensionFilter,
      storage: diskStorage({
        destination: './uploads',
        filename: function (req, file, cb) {
          this.nombreAvatar = Date.now() + path.extname(file.originalname);
          cb(null, this.nombreAvatar);
        },
      }),
    }),
  )
  async createUser(
    @Body() user: any,
    @UploadedFile() avatar: Express.Multer.File,
  ): Promise<void> {
    console.log(user);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
