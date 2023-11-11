/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from 'typeorm';
export const AppDataSource: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_ADDON_HOST,
  port: parseInt(process.env.MYSQL_ADDON_PORT, 10),
  username: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  url: 'mysql://uyg1nu5pnhpbne0l:eUsYQqEmOOuXATXAlTzV@bxw5otlshrpdbuhj2kla-mysql.services.clever-cloud.com:3306/bxw5otlshrpdbuhj2kla',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // À des fins de développement uniquement
  autoLoadEntities: true,
  logging: false,
 
};
const databaseSource = new DataSource(AppDataSource);
databaseSource.initialize();
export default databaseSource;

