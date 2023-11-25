import { Module } from '@nestjs/common';
import { OceanariumModule } from './oceanariums/oceanarium.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [OceanariumModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
