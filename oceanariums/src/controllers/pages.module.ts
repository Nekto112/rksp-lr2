import { Module } from "@nestjs/common";
import { MainController } from "./main.controller";
import { OceanariumService } from "src/oceanariums/oceanarium.service";
import { DatasourceModule } from "src/datasource/datasource.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Oceanarium } from "src/oceanariums/oceanarium.entity";
import { Fish } from "src/fishs/fish.entity";
import { Mollusc } from "src/molluscs/molluscs.entity";
import { FishService } from "src/fishs/fish.service";
import { MolluscService } from "src/molluscs/molluscs.service";

@Module({
    controllers: [MainController],

    providers: [
        OceanariumService, 
        FishService, 
        MolluscService
    ],
    
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Oceanarium, Fish, Mollusc])
    ],
})

export class PagesModule {}
  