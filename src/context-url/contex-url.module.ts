import {Module} from '@nestjs/common';
import {ContextUrlService} from './context-url.service';
import {ContextUrlResolver} from './context-url.resolver';
import {ContextUrlController} from './context-url.controller';

import {TypeOrmModule} from '@nestjs/typeorm';
import {Url} from "./entities/url.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Url])],
    controllers: [ContextUrlController],
    providers: [ContextUrlService, ContextUrlResolver],
    exports: [ContextUrlService],
})
export class ContexUrlModule {
}
