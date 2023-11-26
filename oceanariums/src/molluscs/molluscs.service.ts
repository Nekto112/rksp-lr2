import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Mollusc } from "./molluscs.entity";



@Injectable()
export class MolluscService{
    constructor(private readonly datasourceService: DatasourceService) {}

    create(mollusc: Mollusc) {
        this.datasourceService.getMolluscs().push(mollusc);
        return mollusc;
    }

    findOne(id: number) {
        return this.datasourceService
            .getMolluscs()
            .find((mollusc) => mollusc.id === id);
    }

    findAll(): Mollusc[] {
        return this.datasourceService.getMolluscs();
    }
    
    update(id: number, updatedMollusc: Mollusc) {
        const index = this.datasourceService
            .getMolluscs()
            .findIndex((author) => author.id === id);
        
        this.datasourceService.getMolluscs()[index] = updatedMollusc;
        return this.datasourceService.getMolluscs()[index];
    }
    
    remove(id: number) {
        const index = this.datasourceService
            .getMolluscs()
            .findIndex((author) => author.id === id);
        this.datasourceService.getMolluscs().splice(index, 1);
        return HttpStatus.OK;
    }
    
}