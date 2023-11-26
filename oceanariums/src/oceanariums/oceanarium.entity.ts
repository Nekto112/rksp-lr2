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

    @ApiProperty({example: "Токио", description: 'Расположение океанариума'})
    @Column()
    location: string;

    @ApiProperty({example: "Отлично", description: 'Оценка океанариума'})
    @Column()
    grade: string;
    
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
