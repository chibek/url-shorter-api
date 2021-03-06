import {Injectable, Param} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Url} from "./entities/url.entity";
import {FindOptionsWhere, Repository} from "typeorm";
import {CreateUrlInput} from "./dto/create-url.input";
import {UpdateUrlInput} from "./dto/update-url.input";
import {SUBSCRIPTION_EVENTS} from "../pubsub/pubsub.constants";
import {PubSubService} from "../pubsub/pubsub.service";


@Injectable()
export class ContextUrlService {
    constructor(
        @InjectRepository(Url)
        private urlRepository: Repository<Url>,
        private readonly pubsubService: PubSubService,
    ) {
    }

    findOne(conditions: FindOptionsWhere<Url>): Promise<Url> {
        return this.urlRepository.findOneOrFail({where: conditions})
    }

    findAll(): Promise<Url[]> {
        return this.urlRepository.find();
    }

    create(createUrl: CreateUrlInput): Promise<Url> {
        const dynamicShortUrl = Math.random().toString(36).substr(2, 5);
        const newUrl = this.urlRepository.create({
            ...createUrl,
            shortUrl: dynamicShortUrl
        });
        return this.urlRepository.save(newUrl);
    }

    async update(updateUrl: UpdateUrlInput): Promise<Url> {
        await this.urlRepository.update(updateUrl.id, updateUrl);
        return await this.findOne({id: updateUrl.id});
    }

    async delete(@Param('id') id: string): Promise<String> {
        try {
            await this.urlRepository.delete(id);
        } catch (e) {
            console.log(e)
        }
        return id;
    }

    async updateClick(conditions: FindOptionsWhere<Url>): Promise<Url> {
        const urlUpdated: Url = await this.findOne(conditions);
        urlUpdated.clicks++;
        await this.pubsubService.publish(SUBSCRIPTION_EVENTS.clickUpdate, {
            'clickUpdate': {...urlUpdated}
        });
        return this.urlRepository.save(urlUpdated);
    }
}
