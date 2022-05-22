import {ContextUrlResolver} from './context-url.resolver';
import {ContextUrlService} from "./context-url.service";
import {Url} from "./entities/url.entity";
import {Repository} from "typeorm";
import {CreateUrlInput} from "./dto/create-url.input";

describe('ContextUrlResolver', () => {
    let urlResolver: ContextUrlResolver;
    let urlService: ContextUrlService;
    let urlRepository: Repository<Url>;

    beforeEach(() => {
            urlService = new ContextUrlService(urlRepository);
            urlResolver = new ContextUrlResolver(urlService);
        }
    );

    describe('findAll', () => {
        it('should return an array of urls', async () => {
            const result = Url['test'];
            jest.spyOn(urlService, 'findAll').mockImplementation(() => result);
            expect(await urlResolver.findAll()).toBe(result);
        })
    })

    describe('findOne', () => {
        it('should return only one Url', async () => {
            const result = new Url();
            result.id = '123';
            jest.spyOn(urlService, 'findOne').mockImplementation(() => new Promise((resolve) => resolve(result)));
            expect(await urlResolver.findOne('123')).toBe(result);
        })
    })

    describe('createUrl', () => {
        it('should return create an Url', async () => {
            const createUrl: CreateUrlInput = {
                name: 'test',
                longUrl: '123'
            };
            const result = new Url();
            result.name = 'test'
            result.longUrl = '123'
            jest.spyOn(urlService, 'create').mockImplementation(() => new Promise((resolve) => resolve(result)));
            expect(await urlResolver.create(createUrl)).toEqual(createUrl);
        })
    })
});
