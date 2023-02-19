import { Module } from '@nestjs/common';
import { BlogRepository } from 'src/common/repositories/blog.repository';
import { UserRepository } from 'src/common/repositories/user.repository';
import { CrawlDataController } from './crawl-data.controller';
import { CrawlDataService } from './crawl-data.service';
@Module({
  controllers: [CrawlDataController],
  providers: [CrawlDataService, BlogRepository, UserRepository]
})
export class CrawlDataModule {}
