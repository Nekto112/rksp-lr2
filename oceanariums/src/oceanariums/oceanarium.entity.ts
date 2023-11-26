import { Fish } from "src/fishs/fish.entity";
import { Mollusc } from "src/molluscs/molluscs.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ("oceanarium")
export class Oceanarium {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({})
    name: string;
    @Column()
    location: string;
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
