import {ContextUrlResolver} from './context-url.resolver';
import {ContextUrlService} from "./context-url.service";
import {Url} from "./entities/url.entity";
import {Repository} from "typeorm";

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

});
