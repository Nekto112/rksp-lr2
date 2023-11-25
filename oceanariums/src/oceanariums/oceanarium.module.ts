import { Module } from '@nestjs/common';
import {Oceanarium} from './oceanatrium.entity.js'
import { OceanariumController } from './oceanarium.controller.js';
import { OceanariumService } from './oceanarium.service.js';

@Module({
  controllers: [OceanariumController],
  providers: [OceanariumService],
  imports: [Oceanarium],
})
export class OceanariumModule {}
