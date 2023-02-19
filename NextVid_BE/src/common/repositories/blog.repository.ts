import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { CreateBlogDto } from 'src/blog/dto/create-blog.dto';
import { UpdateBlogDto } from 'src/blog/dto/update-blog.dto copy';
import { DataSource, Like, Repository } from 'typeorm';
// import { GetTaskFilterDto } from './dto/get-search-task.dto';
import { Blog } from '../entities/blog.entity';
import { UserRelation } from '../entities/User-Relation.entity';
import { User } from '../entities/user.entity';
import { AccessMod } from '../enum';

@Injectable()
export class BlogRepository extends Repository<Blog> {
  constructor(private dataSource: DataSource) {
    super(Blog, dataSource.createEntityManager());
  }
}
