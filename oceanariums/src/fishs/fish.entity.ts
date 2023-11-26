import { ApiProperty } from "@nestjs/swagger";
import { Oceanarium } from "src/oceanariums/oceanarium.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('fishs')
export class Fish {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Обыкновенный сом', description: 'Название рыбы'})
    @Column({unique: true})
    name: string;

    @ApiProperty({example: "Лучепёрые рыбы", description: 'Класс рыбы'})
    @Column()
    species: string;

    @ApiProperty({example: 'Пресноводные', description: 'Среда обитания'})
    @Column()
    habitat: string;

    @ApiProperty({example: 'Реки и озера Европы', description: 'Место обитания'})
    @Column()
    location: string;

    @ManyToMany((type) => Oceanarium, (oceanarium) => oceanarium.fishs)
    @JoinTable({
        name: 'oceanarium_fish',
        joinColumn: { name: 'fish_id' },
        inverseJoinColumn: { name: 'oceanarium_id' },
    })
    oceanariums: Oceanarium[];
}
