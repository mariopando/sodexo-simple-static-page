import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { NewsModule } from './news/news.module';
import { NewsService } from './news/news.service';

// import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      serveRoot: '',
      renderPath: '',
    }),
    CommentsModule,
    NewsModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService, NewsService],
})
export class AppModule {}
