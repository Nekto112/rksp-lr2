import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Mollusc } from "./molluscs.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Oceanarium } from "src/oceanariums/oceanarium.entity";
import { CreateMolluscDto } from "./molluscs.dto";
import { IncompleteMolluscsDto } from "./incomplete-molluscs.dto";



@Injectable()
export class MolluscService{
    constructor(
        @InjectRepository(Mollusc)
        private readonly molluscRepository: Repository<Mollusc>,
        @InjectRepository(Oceanarium)
        private readonly oceanariumRepository: Repository<Oceanarium>,
    ) {}

    async create(molluscDto: CreateMolluscDto) : Promise<Mollusc> {
        const mollusc : Mollusc = this.molluscRepository.create();

        mollusc.name = molluscDto.name;
        mollusc.species = molluscDto.species;
        const oceanariums = await this.oceanariumRepository.findBy({
            id: In(molluscDto.oceanariums)
        })
        mollusc.oceanariums = oceanariums;

        this.molluscRepository.save(mollusc);
        return mollusc;
    }

    findOne(id: number) : Promise<Mollusc>{
        return this.molluscRepository.findOne({
            where: {id},
            relations : {
                oceanariums: true,
            }
        });
    }

    async findAll() : Promise<Mollusc[]> {
        const molluscs = await this.molluscRepository.find({
            relations:{
                oceanariums: true,
            }
        });
        return molluscs;
    }
    
    async update(id: number, updatedMollusc: Mollusc)  : Promise<Mollusc>{
        const mollusc = await this.molluscRepository.findOne({where: {id}});

        mollusc.name = updatedMollusc.name;
        mollusc.species = updatedMollusc.species;
        mollusc.oceanariums = updatedMollusc.oceanariums;

        this.molluscRepository.save(mollusc);
        return mollusc;
    }
    
    remove(id: number) {
        this.molluscRepository.delete({id});
    }

    async findIncomplete() : Promise<IncompleteMolluscsDto[]>{
        const molluscs = await this.molluscRepository.find();

        const incompleteMolluscs : IncompleteMolluscsDto[] = molluscs.map((mollusc) => {
            const incompleteMollusc = new IncompleteMolluscsDto();

            incompleteMollusc.name = mollusc.name;
            incompleteMollusc.species = mollusc.species;
            incompleteMollusc.id = mollusc.id;
            
            return incompleteMollusc;
        });

        return incompleteMolluscs;
    }
}