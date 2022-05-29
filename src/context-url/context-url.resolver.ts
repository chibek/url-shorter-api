import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';
import {Url} from "./entities/url.entity";
import {ContextUrlService} from "./context-url.service";
import {CreateUrlInput} from "./dto/create-url.input";
import {UpdateUrlInput} from "./dto/update-url.input";
import {PubSubService} from "../pubsub/pubsub.service";
import {SUBSCRIPTION_EVENTS} from "../pubsub/pubsub.constants";


@Resolver(() => Url)
export class ContextUrlResolver {
    constructor(private readonly urlService: ContextUrlService,
                private readonly pubsubService: PubSubService,
    ) {
    }

    @Query(() => Url)
    findOne(@Args('id', {type: () => String}) id: string): Promise<Url> {
        return this.urlService.findOne({id: id});
    }

    @Query(() => [Url], {name: 'urls'})
    findAll(): Promise<Url[]> {
        return this.urlService.findAll();
    }

    @Mutation(() => Url)
    create(@Args('createUrl') createUrl: CreateUrlInput): Promise<Url> {
        return this.urlService.create(createUrl);
    }

    @Mutation(() => Url)
    update(@Args('updateUrl') updateUrl: UpdateUrlInput): Promise<Url> {
        return this.urlService.update(updateUrl);
    }

    @Mutation(() => String)
    async delete(@Args('id', {type: () => String}) id: string): Promise<String> {
        return await this.urlService.delete(id);
    }

    @Mutation(() => Url)
    async updateClick(@Args('id', {type: () => String}) id: string): Promise<Url> {
        return await this.urlService.updateClick({id: id});
    }

    @Subscription(() => Url, {
            filter: (payload, variables) => payload.clickUpdate.id === variables.id
        }
    )
    clickUpdate(@Args('id') id: string) {
        return this.pubsubService.subscribe(SUBSCRIPTION_EVENTS.clickUpdate);
    }
}
