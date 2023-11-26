import { Module } from '@nestjs/common';
import { FishController } from './fish.controller';
import { FishService } from './fish.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fish } from './fish.entity';
import { Oceanarium } from 'src/oceanariums/oceanarium.entity';


@Module({
    controllers: [FishController],
    providers: [FishService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Fish, Oceanarium]),
    ],
})
export class FishModule {}
