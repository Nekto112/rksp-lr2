import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { MolluscController } from './molluscs.controller';
import { MolluscService } from './molluscs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oceanarium } from 'src/oceanariums/oceanarium.entity';
import { Mollusc } from './molluscs.entity';

@Module({
    controllers: [MolluscController],
    providers: [MolluscService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Mollusc, Oceanarium])
    ],
})

export class MolluscsModule {}
