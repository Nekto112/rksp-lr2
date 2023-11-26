import { ApiProperty } from "@nestjs/swagger";

export class CreateMolluscDto {
    @ApiProperty({example: 'Виноградная улитка', description: 'Название моллюска'})
    name: string;

    @ApiProperty({example: "Улитковые", description: 'Вид моллюска'})
    species: string;

    @ApiProperty({example: [1, 2], description: 'Список идентификаторов океанариумов'})
    oceanariums: number[];
  }
  