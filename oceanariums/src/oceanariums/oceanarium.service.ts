import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Oceanarium } from "./oceanatrium.entity";


@Injectable()
export class OceanariumService{
    constructor(private readonly datasourceService: DatasourceService) {}

    create(oceanarium: Oceanarium) {
        this.datasourceService.getOceanariums().push(oceanarium);
        return oceanarium;
    }

    findOne(id: number) {
        return this.datasourceService
            .getOceanariums()
            .find((oceanarium) => oceanarium.id === id);
    }

    findAll(): Oceanarium[] {
        return this.datasourceService.getOceanariums();
    }
    
    update(id: number, updatedOceanarium: Oceanarium) {
        const index = this.datasourceService
            .getOceanariums()
            .findIndex((author) => author.id === id);
        
        this.datasourceService.getOceanariums()[index] = updatedOceanarium;
        return this.datasourceService.getOceanariums()[index];
    }
    
    remove(id: number) {
        const index = this.datasourceService
            .getOceanariums()
            .findIndex((author) => author.id === id);
        this.datasourceService.getOceanariums().splice(index, 1);
        return HttpStatus.OK;
    }
    
}