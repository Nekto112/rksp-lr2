import { FishService } from "./fish.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { Fish } from "./fish.entity";
import { CreateFishDto } from "./fish.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('Fishs')
@ApiTags('Рыбы')
export class FishController{
    constructor (private readonly fishService: FishService) {}

    @ApiOperation({ summary: 'Просмотреть всех рыб' }) 
    @Get()
    findAll(){
        return this.fishService.findAll();
    }

    @ApiOperation({ summary: 'Просмотреть рыбу по id' }) 
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.fishService.findOne(+id);
    }

    @ApiOperation({ summary: 'Изменить рыбу' }) 
    @Put(':id')
    update(@Param('id') id: string, @Body() updateFish: Fish){
        return this.fishService.update(+id, updateFish);
    }

    @ApiOperation({ summary: 'Добавить рыбу' }) 
    @Post()
    create(@Body() createFish: CreateFishDto){
        return this.fishService.create(createFish);
    }

    @ApiOperation({ summary: 'Удалить рыбу' }) 
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.fishService.remove(+id);
    }

    @ApiOperation({ summary: 'Получить случайную рыбу' }) 
    @Get('/random/:id')
    random(@Param('id') id: string){
        return this.fishService.randomFish();
    }

    @ApiOperation({ summary: 'Получить неполых рыб' }) 
    @Get('/incomplete/:id')
    getIncomplete(@Param('id') id: string){
        return this.fishService.findIncomplete();
    }
}