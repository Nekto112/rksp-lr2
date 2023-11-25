import { Module } from '@nestjs/common';
import { DatasourceService } from './datasource.module';

@Module({
  providers: [DatasourceService],
  exports: [DatasourceService],
})
export class DatasourceModule {}
