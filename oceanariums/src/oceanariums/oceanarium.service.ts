import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Oceanarium } from "./oceanarium.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Fish } from "src/fishs/fish.entity";
import { Mollusc } from "src/molluscs/molluscs.entity";
import { CreateOceanariumDto } from "./oceanarium.dto";
import { IncompleteOceanariumDto } from "./incomplete-oceanarium.dto";


@Injectable()
export class OceanariumService{
    constructor(
        @InjectRepository(Oceanarium)
        private readonly oceanariumRepository : Repository<Oceanarium>,
        @InjectRepository(Fish)
        private readonly fishRepository : Repository<Fish>,
        @InjectRepository(Mollusc)
        private readonly molluscsRepository : Repository<Mollusc>,
    ) {}

    async create(oceanariumDto: CreateOceanariumDto) : Promise<Oceanarium>{
        const oceanarium = this.oceanariumRepository.create();

        oceanarium.name = oceanariumDto.name;
        oceanarium.location = oceanariumDto.location;
        oceanarium.grade = oceanariumDto.grade;
        oceanarium.descr = oceanariumDto.descr;
        
        const fishs = await this.fishRepository.findBy({
            id: In(oceanariumDto.fishs)
        })
        oceanarium.fishs = fishs;

        const molluscs = await this.molluscsRepository.findBy({
            id: In(oceanariumDto.molluscs)
        });
        oceanarium.molluscs = molluscs;

        await this.oceanariumRepository.save(oceanarium);
        return oceanarium;
    }

    findOne(id: number) : Promise<Oceanarium> {
        return this.oceanariumRepository.findOne({
            where: {id},
            relations : {
                fishs: true,
                molluscs: true,
            }
        });
    }

    async findAll(): Promise<Oceanarium[]> {
        const oceanariums = await this.oceanariumRepository.find({
            relations: {
                fishs: true,
                molluscs: true,
            }
        })

        return oceanariums;
    }
    
    async update(id: number, updatedOceanarium: Oceanarium) {
        const oceanarium = await this.oceanariumRepository.findOne({where: {id}});

        oceanarium.name = updatedOceanarium.name;
        oceanarium.grade = updatedOceanarium.grade;
        oceanarium.location = updatedOceanarium.location;
        oceanarium.fishs = updatedOceanarium.fishs;
        oceanarium.descr = updatedOceanarium.descr;
        oceanarium.molluscs = updatedOceanarium.molluscs;

        await this.oceanariumRepository.save(oceanarium);
        return oceanarium;
    }
    
    remove(id: number) {
        this.oceanariumRepository.delete({id});
    }

    async findIncomplete() : Promise<IncompleteOceanariumDto[]>{
        const ocanariums = await this.oceanariumRepository.find();

        const incompleteOceanariums : IncompleteOceanariumDto[] = ocanariums.map((oceanarium) => {
            const incompleteOceanarium = new IncompleteOceanariumDto();
            incompleteOceanarium.id = oceanarium.id;
            incompleteOceanarium.name = oceanarium.name;
            incompleteOceanarium.location = oceanarium.location;
            incompleteOceanarium.grade = oceanarium.grade;
            return incompleteOceanarium;
        });
        
        return incompleteOceanariums;
    }

    async randomOceanariums(num : number) : Promise<Oceanarium[]>{
        const oceanariums = await this.oceanariumRepository
            .createQueryBuilder('user')
            .select()
            .orderBy('RANDOM()')
            .take(num)
            .getMany();

        return oceanariums;
    }
    
}