import { Injectable} from '@nestjs/common';
import {RedisPubSub} from 'graphql-redis-subscriptions';
import {SUBSCRIPTION_EVENTS} from 'src/pubsub/pubsub.constants';

@Injectable()
export class PubSubService {
    constructor(
        private readonly pubSubProvider: RedisPubSub,
    ) {
    }

    public async publish(trigger: SUBSCRIPTION_EVENTS, payload) {
        await this.pubSubProvider.publish(trigger, payload);
    }

    public subscribe(trigger: SUBSCRIPTION_EVENTS) {
        return this.pubSubProvider.asyncIterator(trigger);
    }
}