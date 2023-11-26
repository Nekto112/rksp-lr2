import { ApiProperty } from "@nestjs/swagger";

export class CreateFishDto {
  @ApiProperty({example: 'Обыкновенный сом', description: 'Название рыбы'})
  name: string;

  @ApiProperty({example: "Лучепёрые рыбы", description: 'Класс рыбы'})
  species: string;

  @ApiProperty({example: 'Пресноводные', description: 'Среда обитания'})
  habitat: string;

  @ApiProperty({example: 'Реки и озера Европы', description: 'Место обитания'})
  location: string;


  @ApiProperty({example: [1, 2], description: 'Список идентификаторов океанариумов'})
  oceanariums: number[];
}
  