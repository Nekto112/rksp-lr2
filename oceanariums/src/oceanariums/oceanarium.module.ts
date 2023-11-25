import { Module } from '@nestjs/common';
import {Oceanarium} from './oceanatrium.entity.js'

@Module({
  controllers: [],
  providers: [],
  imports: [Oceanarium],
})
export class OceanariumModule {}
