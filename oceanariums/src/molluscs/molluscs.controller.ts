import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { Mollusc } from "./molluscs.entity";
import { MolluscService } from "./molluscs.service";
import { CreateMolluscDto } from "./molluscs.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('molluscs')
@ApiTags('Моллюски')
export class MolluscController{
    constructor (private readonly molluscService: MolluscService) {}

    @ApiOperation({ summary: 'Просмотреть всех моллюсков' }) 
    @Get()
    findAll(){
        return this.molluscService.findAll();
    }

    @ApiOperation({ summary: 'Просмотреть моллюска по id' }) 
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.molluscService.findOne(+id);
    }

    @ApiOperation({ summary: 'Изменить моллюска' }) 
    @Put(':id')
    update(@Param('id') id: string, @Body() updateMollusc: Mollusc){
        return this.molluscService.update(+id, updateMollusc);
    }

    @ApiOperation({ summary: 'Создать моллюска' }) 
    @Post()
    create(@Body() CreateMolluscDto: CreateMolluscDto){
        return this.molluscService.create(CreateMolluscDto);
    }

    @ApiOperation({ summary: 'Удалить моллюска' }) 
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.molluscService.remove(+id);
    }
}