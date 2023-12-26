import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';
import { User } from 'src/user/entities/user.entity';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [config.KEY],
            useFactory: (configService: ConfigType<typeof config>) => {
                const { url } = configService.postgres;
                return {
                    type: 'postgres',
                    /* host,
                    port,
                    username: user,
                    password,
                    database: dbName, */
                    synchronize: false,
                    autoLoadEntities: true,
                    url,
                    ssl: process.env.NODE_ENV === 'prod' ? {
                        rejectUnauthorized: false
                    } : false

                }
            },
        }),
        TypeOrmModule.forFeature([User])
    ],
    providers: [
        /*         {
                    provide: 'API_KEY',
                    useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
                }, */
    ],
    exports: [TypeOrmModule],
})
export class DatabaseModule { }
