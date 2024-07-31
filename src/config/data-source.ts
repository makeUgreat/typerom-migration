import { DataSource, DataSourceOptions } from 'typeorm';
import { typeormConfig } from './typeorm-config';

/*
 * 데이터베이스 연결 정보와 마이그레이션 설정을 포함하는 DataSource 설정.
 * 이 설정은 TypeORM CLI를 사용하여 마이그레이션을 생성하고 실행할 때 사용됨.
 */
const options: DataSourceOptions = {
  ...(typeormConfig as any),
};

export const dataSource = new DataSource(options);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized for migrations!');
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization for migrations:',
      err,
    );
  });
