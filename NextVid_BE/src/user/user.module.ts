import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from 'src/common/repositories/user.repository';
import { RelationRepository } from 'src/common/repositories/relation.repository';
import { BlogRepository } from 'src/common/repositories/blog.repository';

@Module({
  controllers: [UserController],
  providers: [UserService,UserRepository, RelationRepository, BlogRepository]
})
export class UserModule {}
