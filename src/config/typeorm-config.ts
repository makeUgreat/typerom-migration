import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostModel } from '../posts/entities/posts.entity';

/*
 * TypeORM 을 NestJS와 함께 사용할 때 DB 연결 정보를 가지고있는 설정
 * -> 주로 TypeOrmModule을 설정할 때 사용
 * NestJS 애플리케이션이 시작될 때 데이터베이스에 연결하고,
 * 엔티티를 로드하며, 데이터베이스 상호작용을 관리하는 데 사용
 * */
export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 6666,
  username: 'postgres',
  password: '1234',
  database: 'test',
  entities: [PostModel],
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../src/db/migrations/*{.ts,.js}'],
  synchronize: false,
};
