import { Module } from '@nestjs/common';
import { FishController } from './fish.controller';
import { FishService } from './fish.service';
import { DatasourceModule } from 'src/datasource/datasource.module';


@Module({
  controllers: [FishController],
  providers: [FishService],
  imports: [DatasourceModule],
})
export class FishModule {}
