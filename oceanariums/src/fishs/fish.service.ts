import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Fish } from "./fish.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Oceanarium } from "src/oceanariums/oceanarium.entity";
import { CreateFishDto } from "./fish.dto";
import { IncompleteFishDto } from "./incomplete-fish.dto";


@Injectable()
export class FishService{
    constructor(
        @InjectRepository(Fish)
        private readonly fishRepository: Repository<Fish>,
        @InjectRepository(Oceanarium)
        private readonly oceanariumRepository: Repository<Oceanarium>,
    ) {}

    async create(fishDto: CreateFishDto) : Promise<Fish>{
        const fish : Fish = this.fishRepository.create();

        fish.name = fishDto.name;
        fish.location = fishDto.location;
        fish.habitat = fishDto.habitat;
        fish.species = fishDto.species;
        const oceanariums = await this.oceanariumRepository.findBy({
            id: In(fishDto.oceanariums)
        })
        fish.oceanariums = oceanariums;

        this.fishRepository.save(fish);
        return fish;
    }

    findOne(id: number) : Promise<Fish>{
        return this.fishRepository.findOne({
            where: {id},
            relations : {
                oceanariums: true,
            }
        });
    }

    async findAll(): Promise<Fish[]> {
        const fishs = await this.fishRepository.find({
            relations : {
                oceanariums: true,
            }
        })
        return fishs;
    }
    
    async update(id: number, updatedFish: Fish) : Promise<Fish> {
        const fish = await this.fishRepository.findOne({where: {id}});

        fish.name = updatedFish.name;
        fish.location = updatedFish.location;
        fish.habitat = updatedFish.habitat;
        fish.species = updatedFish.species;
        fish.oceanariums = updatedFish.oceanariums;

        this.fishRepository.save(fish);
        return fish;
    }
    
    remove(id: number) {
        return this.fishRepository.delete({id});
    }

    async findIncomplete() : Promise<IncompleteFishDto[]>{
        const fishs = await this.fishRepository.find();

        const incompleteFishs : IncompleteFishDto[] = fishs.map((fish) => {
            const incompleteFish = new IncompleteFishDto();

            incompleteFish.name = fish.name;
            incompleteFish.location = fish.location;
            
            return incompleteFish;
        });

        return incompleteFishs;
    }
    
    async randomFish() : Promise<Fish>{
        const fish = await this.fishRepository
            .createQueryBuilder('user')
            .select()
            .orderBy("RANDOM()")
            .take(1)
            .getOne();
            
        return fish;
    }

}