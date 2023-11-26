import { Oceanarium } from "src/oceanariums/oceanarium.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('fishs')
export class Fish {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    name: string;
    @Column()
    species: string;
    @Column()
    habitat: string;
    @Column()
    location: string[];

    @ManyToMany((type) => Oceanarium, (oceanarium) => oceanarium.fishs)
    @JoinTable({
        name: 'oceanarium_fish',
        joinColumn: { name: 'fish_id' },
        inverseJoinColumn: { name: 'oceanarium_id' },
    })
    oceanariums: Oceanarium[];
}
