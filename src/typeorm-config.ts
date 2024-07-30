import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Post } from './posts/entities/posts.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 6666,
  username: 'postgres',
  password: '1234',
  database: 'test',
  entities: [Post],
  migrationsTableName: 'typeorm_migrations',
  migrations: [__dirname + '/../src/migrations/*{.ts,.js}'],
  synchronize: false,
};
