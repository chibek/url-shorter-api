import {Controller, Get, HttpStatus, Param, Res} from '@nestjs/common';
import {Response} from "express";
import {ContextUrlService} from "./context-url.service";

@Controller('link')
export class ContextUrlController {
    constructor(private readonly urlService: ContextUrlService) {
    }

    @Get('/:name')
    async redirectToUrl(@Param('name') name: string, @Res() res: Response): Promise<void> {
        const updatedUrl = await this.urlService.updateClick({shortUrl: name});
        return res.redirect(HttpStatus.FOUND, updatedUrl.longUrl)
    }
}
