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
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      username: 'postgres', //имя пользователя
      password: '1234', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
	    entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
