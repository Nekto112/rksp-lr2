import { OceanariumService } from "./oceanarium.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { Oceanarium } from "./oceanarium.entity";
import { CreateOceanariumDto } from "./oceanarium.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('oceanariums')
@ApiTags('Океанариумы')
export class OceanariumController{
    constructor (private readonly oceanariumService: OceanariumService) {}

    @ApiOperation({ summary: 'Просмотреть все океанариумы' }) 
    @Get()
    findAll(){
        return this.oceanariumService.findAll();
    }

    @ApiOperation({ summary: 'Просмотреть океанариум по id' }) 
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.oceanariumService.findOne(+id);
    }

    @ApiOperation({ summary: 'Изменение океанариума' }) 
    @Put(':id')
    update(@Param('id') id: string, @Body() updateOceanarium: Oceanarium){
        return this.oceanariumService.update(+id, updateOceanarium);
    }

    @ApiOperation({ summary: 'Создание океанариума' }) 
    @Post()
    create(@Body() createOceanarium: CreateOceanariumDto){
        return this.oceanariumService.create(createOceanarium);
    }

    @ApiOperation({ summary: 'Удалить океанариум' }) 
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.oceanariumService.remove(+id);
    }
}