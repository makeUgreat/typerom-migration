import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { typeormConfig } from './typeorm-config';

const options: DataSourceOptions & SeederOptions = {
  ...(typeormConfig as any),
  seeds: ['src/seeds/**/*{.ts,.js}'],
  factories: ['src/factories/**/*{.ts,.js}'],
};

export const dataSource = new DataSource(options);
