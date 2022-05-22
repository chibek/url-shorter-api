import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Url} from "./entities/url.entity";
import {Repository} from "typeorm";
import {CreateUrlInput} from "./dto/create-url.input";

@Injectable()
export class ContextUrlService {
    constructor(
        @InjectRepository(Url)
        private urlRepository: Repository<Url>,
    ) {
    }

    findOne(id): Promise<Url> {
        return this.urlRepository.findOneOrFail(id)
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
}
