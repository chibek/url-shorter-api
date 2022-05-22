import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Url} from "./entities/url.entity";
import {ContextUrlService} from "./context-url.service";
import {CreateUrlInput} from "./dto/create-url.input";

@Resolver(() => Url)
export class ContextUrlResolver {
    constructor(private readonly urlService: ContextUrlService) {
    }

    @Query(() => [Url], {name: 'urls'})
    findAll() {
        return this.urlService.findAll();
    }

    @Mutation(() => Url)
    create(@Args('createUrl') createUrl: CreateUrlInput): Promise<Url> {
        return this.urlService.create(createUrl);
    }
}
