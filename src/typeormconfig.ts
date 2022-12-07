import * as dotenv from 'dotenv';
import { join } from 'path';
dotenv.config({ path: '.env.dev' });


import { DataSource, DataSourceOptions } from 'typeorm';

export const typeormOptions:DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST, // 'localhost' o 127.0.0.1,
    port: parseInt(process.env.POSTGRES_PORT), // 5432,
    username: process.env.POSTGRES_USER, 
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
}

export default new DataSource(typeormOptions);

