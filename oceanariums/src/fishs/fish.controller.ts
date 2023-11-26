import { FishService } from "./fish.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { Fish } from "./fish.entity";

@Controller('Fishs')
export class FishController{
    constructor (private readonly fishService: FishService) {}

    @Get()
    findAll(){
        return this.fishService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.fishService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateFish: Fish){
        return this.fishService.update(+id, updateFish);
    }

    @Post()
    create(@Body() createFish: Fish){
        return this.fishService.create(createFish);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.fishService.remove(+id);
    }
}