import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';
// import { CreateNewsDto } from './dto/create-news.dto';
// import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  findAll() {
    return this.newsService.findAll();
  }
}
