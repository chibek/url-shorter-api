import {Module} from '@nestjs/common';
import {ContextUrlService} from './context-url.service';
import {ContextUrlResolver} from './context-url.resolver';
import {TypeOrmModule} from '@nestjs/typeorm';

import {Url} from "./entities/url.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Url])],
    providers: [ContextUrlService, ContextUrlResolver],
    exports: [ContextUrlService],
})
export class ContexUrlModule {
}
