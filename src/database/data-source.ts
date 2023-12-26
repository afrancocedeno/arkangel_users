import { DataSource } from 'typeorm';

// export default new DataSource({
export const AppDataSource = new DataSource({
  type: 'postgres',
  username: 'root',
  password: '123456',
  host: 'localhost',
  port: 5432,
  database: 'arkangel_users',
  synchronize: false,
  logging: false,
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});
