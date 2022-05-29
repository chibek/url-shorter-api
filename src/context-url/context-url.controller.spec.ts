import {Test, TestingModule} from '@nestjs/testing';
import {ContextUrlController} from './context-url.controller';
import {Response} from "express";
import {ContextUrlService} from "./context-url.service";

describe('ContextUrlController', () => {
    let controller: ContextUrlController;
    const responseMock = {
        redirect: jest.fn(() => undefined)
    } as unknown as Response

    const mockUrlService = {
        updateClick: jest.fn(() => {
            return {
                Promise
            }
        })
    }

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ContextUrlController],
            providers: [ContextUrlService]
        }).overrideProvider(ContextUrlService).useValue(mockUrlService).compile();

        controller = module.get<ContextUrlController>(ContextUrlController);
    });

    it('redirect url', () => {
        controller.redirectToUrl('123', responseMock)
        expect(mockUrlService.updateClick).toHaveBeenCalled();
    });
});
