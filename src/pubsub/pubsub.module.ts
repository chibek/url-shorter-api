import {Global, Module} from '@nestjs/common';
import {RedisPubSub} from 'graphql-redis-subscriptions';
import {ConfigService, ConfigModule} from '@nestjs/config';
import {PubSubService} from './pubsub.service';

export const PUB_SUB = 'PUB_SUB';

@Global()
@Module({
    imports: [ConfigModule],
    providers: [
        {
            provide: PUB_SUB,
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return new RedisPubSub({
                    connection: {
                        host: configService.get<string>('REDIS_HOST'),
                        port: configService.get<string>('REDIS_PORT'),
                    },
                });
            },
        },
        PubSubService,
        RedisPubSub
    ],
    exports: [PubSubService],
})
export class PubsubModule {
}