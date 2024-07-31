import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { typeormConfig } from './typeorm-config';

/*
 * 데이터베이스 연결 정보와 시딩 설정을 포함하는 DataSource 설정.
 * 이 설정은 시딩 작업을 수행할 때 사용됨.
 */
const options: DataSourceOptions & SeederOptions = {
  ...(typeormConfig as any),
  seeds: ['src/seeds/**/*{.ts,.js}'],
  factories: ['src/factories/**/*{.ts,.js}'],
};

export const dataSource = new DataSource(options);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
