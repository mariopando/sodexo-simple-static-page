import { Injectable } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Injectable()
export class AppService {
  getStaticSite() {
    return ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    });
  }
}
