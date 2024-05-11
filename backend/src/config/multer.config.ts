import { MulterModuleOptions } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

export const multerConfig: MulterModuleOptions = {
  storage: diskStorage({
    destination: './uploads',
  }),
};