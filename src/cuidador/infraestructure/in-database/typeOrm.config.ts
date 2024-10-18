import { DataSource, DataSourceOptions } from "typeorm";
import 'dotenv/config';
import { CuidadorEntity } from "./entities/cuidador.entity";

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: String(process.env.DB_PASSWORD) || 'pg12345678',
  database: process.env.DB_DATABASE || 'talentosos',
  logging: true,
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  entities: [CuidadorEntity],
};

export default new DataSource(dataSourceOptions);