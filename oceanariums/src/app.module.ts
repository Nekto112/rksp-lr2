import { Module } from '@nestjs/common';
import { OceanariumModule } from './oceanariums/oceanarium.module';

@Module({
  imports: [OceanariumModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
