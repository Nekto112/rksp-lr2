import { Module } from '@nestjs/common';
import { OceanariumModule } from './oceanariums/oceanarium.module';
import { DatasourceModule } from './datasource/datasource.module';
import { FishModule } from './fishs/fish.module';
import { MolluscsModule } from './molluscs/molluscs.module';

@Module({
  imports: [OceanariumModule, FishModule, MolluscsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
