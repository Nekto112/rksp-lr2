import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { Mollusc } from "./molluscs.entity";
import { MolluscService } from "./molluscs.service";

@Controller('molluscs')
export class MolluscController{
    constructor (private readonly molluscService: MolluscService) {}

    @Get()
    findAll(){
        return this.molluscService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.molluscService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateMollusc: Mollusc){
        return this.molluscService.update(+id, updateMollusc);
    }

    @Post()
    create(@Body() createMollusc: Mollusc){
        return this.molluscService.create(createMollusc);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.molluscService.remove(+id);
    }
}