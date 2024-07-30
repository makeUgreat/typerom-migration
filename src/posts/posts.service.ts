import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from './entities/posts.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}
}
