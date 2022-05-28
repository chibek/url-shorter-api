import {Controller, Get, HttpStatus, Param, Res} from '@nestjs/common';
import {Url} from "./entities/url.entity";
import {Response} from "express";
import {ContextUrlService} from "./context-url.service";

@Controller('link')
export class ContextUrlController {
    constructor(private readonly urlService: ContextUrlService) {
    }

    @Get('/:name')
    async redirectToUrl(@Param('name') name: string, @Res() res: Response): Promise<void> {
        const url: Url = await this.urlService.findOne({shortUrl: name});
        return res.redirect(HttpStatus.FOUND, url.longUrl)
    }
}
