import { ApiProperty } from "@nestjs/swagger";
import { Fish } from "src/fishs/fish.entity";
import { Mollusc } from "src/molluscs/molluscs.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ("oceanarium")
export class Oceanarium {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: 'Sumida suizokukan', description: 'Название океанариума'})
    @Column({unique: true})
    name: string;

    @ApiProperty({example: "Аквариум имеет современный дизайн и разнообразные зоны, посвященные различным темам, таким как Токийский залив, пингвины и тюлени, острова Огасавара и другие. В аквариуме обитает более 10 000 морских существ", description: 'Описание океанариума'})
    @Column()
    descr: string;

    @ApiProperty({example: "Токио", description: 'Расположение океанариума'})
    @Column()
    location: string;

    @ApiProperty({example: "5", description: 'Оценка океанариума'})
    @Column()
    grade: number;
    
    @ManyToMany((type) => Fish, (fish) => fish.oceanariums) 
    @JoinTable({
        name: "oceanarium_fish",
        joinColumn: {name: 'oceanarium_id'},
        inverseJoinColumn: {name: 'fish_id'},
    })
    fishs: Fish[];

    @ManyToMany((type) => Mollusc, (mollus) => mollus.oceanariums)
    @JoinTable({
        name: "oceanarium_mollus",
        joinColumn: {name: 'oceanarium_id'},
        inverseJoinColumn: {name: 'mollus_id'},
    })
    molluscs: Mollusc[];
}
