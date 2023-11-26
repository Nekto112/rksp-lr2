import { Module } from '@nestjs/common';
import { OceanariumModule } from './oceanariums/oceanarium.module';
import { DatasourceModule } from './datasource/datasource.module';
import { FishModule } from './fishs/fish.module';
import { MolluscsModule } from './molluscs/molluscs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    OceanariumModule, 
    FishModule, 
    MolluscsModule, 
    DatasourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      database: 'rksp',
      username: 'postgres',
      password: '1234',
      host: 'localhost',
      synchronize: true,
      logging: 'all',
	    entities: ['dist/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
