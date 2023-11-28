import { ApiProperty } from "@nestjs/swagger";

export class CreateOceanariumDto {
    @ApiProperty({example: 'Sumida suizokukan', description: 'Название океанариума'})
    name: string;

    @ApiProperty({example: "Аквариум имеет современный дизайн и разнообразные зоны, посвященные различным темам, таким как Токийский залив, пингвины и тюлени, острова Огасавара и другие. В аквариуме обитает более 10 000 морских существ", description: 'Описание океанариума'})
    descr: string;

    @ApiProperty({example: "Токио", description: 'Расположение океанариума'})
    location: string;

    @ApiProperty({example: "5", description: 'Оценка океанариума'})
    grade: number;

    @ApiProperty({example: [1, 2], description: 'Список идентификаторов рыб'})
    fishs: number[];

    @ApiProperty({example: [1, 2], description: 'Список идентификаторов моллюсков'})
    molluscs: number[];
  }
  