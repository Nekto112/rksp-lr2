import { OceanariumService } from "./oceanarium.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { Oceanarium } from "./oceanatrium.entity";

@Controller('oceanariums')
export class OceanariumController{
    constructor (private readonly oceanariumService: OceanariumService) {}

    @Get()
    findAll(){
        return this.oceanariumService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.oceanariumService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateOceanarium: Oceanarium){
        return this.oceanariumService.update(+id, updateOceanarium);
    }

    @Post()
    create(@Body() createOceanarium: Oceanarium){
        return this.oceanariumService.create(createOceanarium);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.oceanariumService.remove(+id);
    }
}