import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config';
import { CuidadorEntity } from "./entities/cuidador.entity";

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_DATABASE,
  logging: true,
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  entities: [CuidadorEntity],
};

export default new DataSource(dataSourceOptions);