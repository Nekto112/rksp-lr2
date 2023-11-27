import { Controller, Get, Param, ParseIntPipe, Render } from '@nestjs/common';
import { Oceanarium } from 'src/oceanariums/oceanarium.entity';
import { OceanariumService } from 'src/oceanariums/oceanarium.service';

@Controller()
export class MainController {
    constructor (private readonly oceanariumService: OceanariumService) {}

    @Get("/home")
    @Render('index')
    async index(@Param('id') id: string) {
        // const oceanarium : Oceanarium = await (this.oceanariumService.findOne(+id));
        // if(oceanarium != null)
        //     return oceanarium;

        return +id;
    }
}