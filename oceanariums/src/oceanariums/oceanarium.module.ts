import { Module } from '@nestjs/common';
import { OceanariumController } from './oceanarium.controller';
import { OceanariumService } from './oceanarium.service';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oceanarium } from './oceanarium.entity';
import { Fish } from 'src/fishs/fish.entity';
import { Mollusc } from 'src/molluscs/molluscs.entity';

@Module({
  controllers: [OceanariumController],
  providers: [OceanariumService],
  imports: [
    DatasourceModule,
    TypeOrmModule.forFeature([Oceanarium, Fish, Mollusc])],
})
export class OceanariumModule {}
