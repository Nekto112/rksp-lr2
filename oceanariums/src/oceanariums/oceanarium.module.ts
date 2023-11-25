import { Module } from '@nestjs/common';
import { OceanariumController } from './oceanarium.controller';
import { OceanariumService } from './oceanarium.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [OceanariumController],
  providers: [OceanariumService],
  imports: [DatasourceModule],
})
export class OceanariumModule {}
