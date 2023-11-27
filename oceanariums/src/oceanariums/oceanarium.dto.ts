import { ApiProperty } from "@nestjs/swagger";

export class CreateOceanariumDto {
    @ApiProperty({example: 'Sumida suizokukan', description: 'Название океанариума'})
    name: string;

    @ApiProperty({example: "Токио", description: 'Расположение океанариума'})
    location: string;

    @ApiProperty({example: "Отлично", description: 'Оценка океанариума'})
    grade: string;
  }
  