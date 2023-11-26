import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { MolluscController } from './molluscs.controller';
import { MolluscService } from './molluscs.service';

@Module({
  controllers: [MolluscController],
  providers: [MolluscService],
  imports: [DatasourceModule],
})

export class MolluscsModule {}
