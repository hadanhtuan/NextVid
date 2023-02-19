import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogRepository } from 'src/common/repositories/blog.repository';
import { Blog } from 'src/common/entities/blog.entity';
import { LikeRepository } from 'src/common/repositories/like.repository';
import { CommentRepository } from 'src/common/repositories/comment.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Blog]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogRepository, LikeRepository, CommentRepository]
})
export class BlogModule {}


