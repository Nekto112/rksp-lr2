import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Fish } from "./fish.entity";


@Injectable()
export class FishService{
    constructor(private readonly datasourceService: DatasourceService) {}

    create(fish: Fish) {
        this.datasourceService.getFishs().push(fish);
        return Fish;
    }

    findOne(id: number) {
        return this.datasourceService
            .getFishs()
            .find((Fish) => Fish.id === id);
    }

    findAll(): Fish[] {
        return this.datasourceService.getFishs();
    }
    
    update(id: number, updatedFish: Fish) {
        const index = this.datasourceService
            .getFishs()
            .findIndex((author) => author.id === id);
        
        this.datasourceService.getFishs()[index] = updatedFish;
        return this.datasourceService.getFishs()[index];
    }
    
    remove(id: number) {
        const index = this.datasourceService
            .getFishs()
            .findIndex((author) => author.id === id);
        this.datasourceService.getFishs().splice(index, 1);
        return HttpStatus.OK;
    }
    
}