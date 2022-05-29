import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Url} from "./entities/url.entity";
import {ContextUrlService} from "./context-url.service";
import {CreateUrlInput} from "./dto/create-url.input";
import {UpdateUrlInput} from "./dto/update-url.input";


@Resolver(() => Url)
export class ContextUrlResolver {
    constructor(private readonly urlService: ContextUrlService) {
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
        return await  this.urlService.delete(id);
    }

    @Mutation(() => Url)
    async updateClick(@Args('id', {type: () => String}) id: string): Promise<Url> {
        return await this.urlService.updateClick(id);
        // await this.pubSub.publish(SUBSCRIPTION_EVENTS.urlClicked, {
        //     urlClicked: url
        // });
    }

    // @Subscription(() => Url)
    // getClicks() {
    //     return this.pubSub.asyncIterator(SUBSCRIPTION_EVENTS.urlClicked);
    // }
}
