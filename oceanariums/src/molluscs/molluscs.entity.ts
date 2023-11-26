import { ApiProperty } from "@nestjs/swagger";
import { Oceanarium } from "src/oceanariums/oceanarium.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ("mollusc")
export class Mollusc {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Виноградная улитка', description: 'Название моллюска'})
    @Column({unique: true})
    name: string;

    @ApiProperty({example: 'Брюхоногие', description: 'Класс молюска'})
    @Column()
    species: string;
     
    @ManyToMany((type) => Oceanarium, (oceanarium) => oceanarium.molluscs)
    @JoinTable({
        name: 'oceanarium_mollus',
        joinColumn: { name: 'mollus_id' },
        inverseJoinColumn: { name: 'oceanarium_id' },
    })
    oceanariums: Oceanarium[];
}
