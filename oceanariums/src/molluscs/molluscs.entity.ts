import { Oceanarium } from "src/oceanariums/oceanarium.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ("mollusc")
export class Mollusc {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    name: string;
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
