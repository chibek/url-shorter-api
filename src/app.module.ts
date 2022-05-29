import {Module} from '@nestjs/common';

import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {ConfigModule} from '@nestjs/config';

import {TypeOrmModule} from '@nestjs/typeorm';

import {config} from './config/config';
import {DatabaseConfig} from './config/database-config';
import {join} from "path";
import {ContexUrlModule} from './context-url/contex-url.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import {PubsubModule} from "./pubsub/pubsub.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: DatabaseConfig,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.sql'),
            sortSchema: true,
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
            subscriptions: {
                'subscriptions-transport-ws': true,
            },
        }),
        PubsubModule,
        ContexUrlModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
